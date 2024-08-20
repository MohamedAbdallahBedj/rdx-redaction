"use strict";
const { createTransport } = require("nodemailer");

function createContactFormMessage(name, email, subject, message) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Submission</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
    
            h2 {
                color: #333;
            }
    
            p {
                margin-bottom: 10px;
                font-size: 16px;
            }
    
            strong {
                font-weight: bold;
            }
    
            .footer {
                margin-top: 30px;
                text-align: center;
                color: #777;
            }
        </style>
    </head>
    <body dir='ltr'>
        <div class="container">
            <h2 style="font-size: 24px;">Nouvelle demande de contact envoyée depuis le site RDX Redxation:</h2>
            <p><strong>Nom et prénom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <div class="footer">
                        <p>© 2023 RDX Redaction. Tous droits réservés.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

function createOrderFormMessage(name, phone, wilaya, product, quantity, addresse) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Submission</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
    
            h2 {
                color: #333;
            }
    
            p {
                margin-bottom: 10px;
                font-size: 16px;
            }
    
            strong {
                font-weight: bold;
            }
    
            .footer {
                margin-top: 30px;
                text-align: center;
                color: #777;
            }
        </style>
    </head>
    <body dir='ltr'>
        <div class="container">
            <h2 style="font-size: 24px;">Nouvelle commande d'achat envoyée depuis le site RDX Redxation:</h2>
            <p><strong>Nom et prénom du client:</strong> ${name}</p>
            <p><strong>Numéro de téléphone:</strong> ${phone}</p>
            <p><strong>Wilaya:</strong> ${wilaya}</p>
            <p><strong>Article commandé:</strong> ${product?.acf?.title?.rendered || ""}</p>
            <p><strong>Quantité commandée:</strong> ${quantity}</p>
            <p><strong>Net a payer:</strong> ${quantity * parseInt(product?.acf?.prix)}</p>
            <p><strong>Addresse:</strong></p>
            <p>${addresse}</p>
            <div class="footer">
                        <p>© 2023 RDX Redaction. Tous droits réservés.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

async function sendMail(to, subject, content, type) {
    try {

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();
        let contactAccount = {
            user: process.env.CONTACT_MAIL,
            pass: process.env.CONTACT_PASS
        }
        let orderAccount = {
            user: process.env.ORDER_MAIL,
            pass: process.env.ORDER_PASS
        }

        // create reusable transporter object using the default SMTP transport
        let transporter = createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.NODE_ENV === "production", // true for 465, false for other ports
            // secure: true, // true for 465, false for other ports
            auth: {
                user: type === 'contact' ? contactAccount.user : orderAccount.user, // generated ethereal user
                pass: type === 'contact' ? contactAccount.pass : orderAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: contactAccount.user,
            to: to,
            subject: subject,
            html: content,
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        throw error;
    }
}

module.exports = { sendMail, createContactFormMessage, createOrderFormMessage }