const nodemailer = require('nodemailer');
var fs= require('fs');
/*const mailgun= require('nodemailer-mailgun-transport');*/
var config =JSON.parse(fs.readFileSync("config.json"));

/*
const auth ={
    auth: {
        api_key: '',
        domain: ''
    }
}; */

let transporter = nodemailer.createTransport({
    /*service: 'gmail' ,
    secure: false,
    port:25,*/
    auth : {
        user: config.Email ,
        pass : config.password
    },
    /*tls : {
        rejectUnauthorized : false
    }*/
 });


const sendMail =(email,subject,text,cb) => {
    const mailOptions ={
        from:email,
        to: config.Email,
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err,null);
        } else {
            cb(null,data);
        }
    });
}

module.exports =sendMail;
