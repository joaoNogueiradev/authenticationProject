const otpForm = document.querySelector('.otpForm')

otpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clique')
});


// const nodemailer = require('nodemailer');
// const generatedToken = require('./script.js')

// const transport = nodemailer.createTransport({
//     host:'smtp.gmail.com',
//     port:465,
//     secure:true,
//     auth:{
//             user:'tjs202624@gmail.com',
//             pass:'wpdw mtjx yhap xzxq'
//     }
// });

// transport.sendMail({
//     from:'João Nogueira <tjs202624@gmail.com>',
//     to: `${destinationEmail.value}`,
//     subject: `Token de ${emailDestinationName.value}`,
//     html:`
//         <h1>Olá, ${destinationEmail.value}</h1>
//         <h2>Seu token de autenticação é: ${generatedToken}</h2>
//     `,
//     text: `Olá, seu token de autenticação é o: ${generatedToken}`
// })
// .then(() => console.log('Email enviado com sucesso!'))
// .catch((err) => console.log('erro ao enviar email: ', err));

