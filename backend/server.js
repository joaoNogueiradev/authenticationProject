const express = require('express');
const app = express();

require('dotenv').config();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/otpForm.html')
})

app.post('/', (req,res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
                user:process.env.EMAIL_ADM,
                pass:process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from:process.env.EMAIL_ADM,
        to:req.body.email,
        subject:`${req.body.subject} for ${req.body.name}`,
        text:req.body.message
    }

    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            console.log(error);
            res.send('Error')
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})