"use strict";

const mongoose = require("mongoose"),
	{ Schema } = mongoose,
	passportLocalMongoose = require('passport-local-mongoose'),
	userSchema = new Schema({
		first: {
			type: String,
			required: true,
			trim: true
		},
		last: {
			type: String,
			required: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true
		},
		country: {
			type: String
		},
		count: {
			type: Number
		}
	}, {
		timestamps: true
	});
	
userSchema.plugin(passportLocalMongoose, {
	usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);