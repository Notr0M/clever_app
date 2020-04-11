'use strict';

const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const cors = require("cors");
const userController = require("./controllers/userController");
const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;
//const expressSession = require("express-session");
//const cookieParser = require("cookie-parser");
const passport = require("passport");
const User = require('./models/user');
const jwt = require("jsonwebtoken");

mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", () => {
	console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use(cors());
app.use(express.urlencoded({
	extended: false
}));
app.use(express.json());
/*app.use(cookieParser("secret_passcode"));
app.use(expressSession({
	secret: "secret_passcode",
	cookie: {
		maxAge: 4000000
	},
	resave: false,
	saveUninitialized: false
})); */
app.use(passport.initialize());
//app.use(passport.session());
app.use(express.static('public'));

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function midle(req, res, next) {
	console.log('midle called');
	next();
}

app.post("/api/login", midle, (req, res, next) => {
		console.log(req.body);
	passport.authenticate("local", (err, user, info) => {
		if(err) {
			console.log("passport err ");
			next(err);
		} else if(!user) {
			console.log("user not found");
			res.end(JSON.stringify({
				success: false
			}));
		} else {
			console.log("user found");
			console.log(req.body.email);
			let signedToken = jwt.sign({
				data: user._id,
			}, "secret_code", {expiresIn: "1h"});
			console.log(signedToken);
			req.logIn(user, (err) => {
				if(err) next(err);
				return res.json({
								success: true,
								token: signedToken,
								first: user.first,
								last: user.last,
								email: user.email
							});
			});
		}
	})(req, res, next)
});

app.use((req, res, next) => {
	console.log("token check");
	let token = req.headers.token;
	if(token) {
		jwt.verify(token, "secret_code", (err, payload) => {
			if(payload) {
				User.findById(payload.data).then(user => {
					if(user) {
						console.log("here")
						res.user = user;
						next();
					} else {
						res.status(403).json({
							error: true,
							message: "No User account found."
						});
						next();
					}
				});
			} else {
				console.log("ERRRRRRRRRRRRR");
				console.log(err);
				res.status(401).json({
					error: true,
					message: "Cannot verify API token."
				});
			}
		});
	} else {
			res.status(404).json({
				error: true,
				message: "Provide Token"
			});
	}
});

app.post('/check', (req, res) => {
	console.log("checking ...");
	console.log(res.user);
	res.json({
		success: true,
		user: res.user
	});
});

app.get("/test", (req, res) => {
	console.log("/test")
	res.end(JSON.stringify({
		success: true
	}));
});

app.post("/api/create", userController.createUser);

app.get("/logout", (req, res) => {
	console.log("/logout")
	req.logout();
	res.end(JSON.stringify({
		message: "Logout"
	}));
});

app.get('/*', (req, res, next) => {
	console.log('called');
	const file = 
	res.sendFile('index.html', {
		root: path.join(__dirname,"public"),
		headers: {
			"Content-Type": "text/html"
		}
	}, (err) => {
		if(err) {
			console.log("ErRRRRR");
			next(err);
		} else {
			console.log("file sent");
		}
	})
});

app.use((err, req, res, next) => {
	console.log("error caught");
	console.log(err);
	res.status(400);
	res.set("Content-Type", "text/plain");
	res.end("400 bad request");
});

app.listen(port, () => {
	console.log(`running on ${port}`);
}); 