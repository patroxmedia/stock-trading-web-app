import nodemailer from "nodemailer";
import {WELCOME_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates";
export const transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
    }
})

export const sendWelcomeEmail = async ({email,name,intro}:WelcomeEmailData)=>{
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
    .replace('{{intro}}', intro);
    const mailOptions = {
        from: `"Fireloard" <deepak.patroxmedia@gmail.com>`,
        to: email,
        subject: 'Welcome to Fireloard -your Stock market toolkit is ready',
        text:'Thank you for Joining Fireload !',
        html:htmlTemplate
    }
    await transporter.sendMail(mailOptions);
}