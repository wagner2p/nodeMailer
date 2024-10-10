const nodemailer = require("nodemailer");

// Configuração do transportador usando o Gmail
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wagnerparnoffpereira@gmail.com", // e-mail do Gmail
    pass: "", // Token de app - Google exige para segurança
  },
});

// Detalhes do e-mail
let mailOptions = {
  from: "wagnerparnoffpereira@gmail.com", // Remetente
  to: "wagnerparnoffpereira@gmail.com", // Destinatário
  subject: "Teste de e-mail com Node.js", // Assunto
  text: "Este é um e-mail de teste enviado usando Node.js e Nodemailer.", // Corpo do e-mail
};

// Enviando o e-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Erro ao enviar e-mail: " + error);
  } else {
    console.log("E-mail enviado: " + info.response);
  }
});
