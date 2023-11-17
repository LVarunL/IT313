const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const otpGenerator = require('otp-generator')
const { v4: uuidv4 } = require('uuid');


// models
const user = require("../models/user");
const otp = require("../models/otp");



// otp-mailer
const mailer = require("../mailer/mailer");

// MAILER IMPORT KRVNU BAKI 6




const user_signup = async (req, res) => {
    const data = req.body;
    // const phone = req.body.phone;
    // const email = req.body.email;

    const already_exist_email = await user.findOne({ email: req.body.email });



    if (already_exist_email) {
        res.status(399).send("Alredy Exist");
    }
    else {

        console.log(data);

        const new_user = new user({
            id: uuidv4(),
            name: data.name,
            phone: data.phone,
            email: data.email,
            password: data.password,
            username: data.username
        })

        try {
            const save = await new_user.save()
                .then(async () => {
                    const x = await user.find({ email: data.email });
                    console.log("SAVED");
                    res.status(200).send(x);
                }).catch((e) => {
                    console.log("THIS IS ERROR FROM signup.js file");
                    console.log(e);
                    const err = e.keyPattern;
                    // console.log(err);
                    if (err.hasOwnProperty('email') == true && err.email == 1) {
                        res.status(410).send();
                    }
                    else if (err.hasOwnProperty('phone') == true && err.phone == 1) {
                        res.status(411).send();
                    }
                    else if (err.hasOwnProperty('username') == true && err.username == 1) {
                        res.status(412).send();
                    }
                    else {
                        res.status(413).send("Bad Request");
                    }
                })
        } catch (error) {
            console.log("THIS IS ERROR FROM signup.js -> save");
            console.log(error);
            res.status(400).send();
        }

        try {
            // MAILER
            console.log("FFFF");
            const otp_number = otpGenerator.generate(6, { lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
            const mail = mailer(new_user.username,new_user.email,otp_number);
            const data = new otp({
                email : new_user.email,
                otp : otp_number
            })
            try {
                const saved = data.save();
            } catch (error) {
                console.log("This is error from signup.js -> mailer part");
                console.log(error);
                res.status(400).send();
            }

        } catch (error) {
            console.log("This is the error from signup.js -> otp block")
            console.log(error);
            res.status(400).send();
        }

    }

    // console.log()

}
// )


module.exports = user_signup;