"use strict";

const User = require("../models/user");
const passport = require("passport");

module.exports = {
	createUser: (req, res, next) => {
		if(req.skip){
			next();
		}
		console.log(req.body);
		let newUser = {
			first: req.body.first,
			last: req.body.last,
			email: req.body.email,
			country: req.body.country
		};
		User.register(newUser, req.body.password, (err, user) => {
			if(user) {
				res.end(JSON.stringify({
					success: true,
					message: "Your account created succeussfully"
				}));
			} else {
				console.log("ERRRRRRRR");
				console.log(err);
				res.end(JSON.stringify({
					success: false,
					message: err.message
				}));
			}
		});
	}
}