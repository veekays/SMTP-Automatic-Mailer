'use strict';
const nodemailer = require('nodemailer');


    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "username", 
            pass: "password" 
        }
    });

    let mailOptions = {
        from: 'sender@email.com', // sender address
        to: 'receiver@email.com', // list of receivers
        subject: 'Hello World', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });