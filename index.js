const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({
  host: 'email-ssl.com.br',
  port: 465,
  secure: true, // true para 465, false para outras
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASSWORD,
  }
});

transport.sendMail({
  from: 'Teste de email <contato@tonmaquininhasonline.com.br>',
  to: process.env.DESTINATION_MAIL,
  subject: 'Enviando email com Nodemailer',
  html: '<h1>Olá, tudo bem?</h1> <p>Email enviado usando o Nodemailer</p>',
  text: 'Olá, tudo bem? Esse email foi enviado usando o Nodemailer', //Caso o email do 'html' não seja renderizado pelo servidor do usuário que receberá o email.
})
  .then(() => console.log('Email enviado com sucesso! ;)'))
  .catch((error) => console.log('Erro ao enviar o email: ', error));