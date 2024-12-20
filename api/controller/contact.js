import asyncHandler from "../middleware/asycHandler.js";
import nodemailer from "nodemailer"
export const contact = asyncHandler(async (req, res) => {
    const { email,subject,text } = req.body;
    if (!email) {
        return res.status(400).send('No email address provided.');
    }
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'lm3654725@gmail.com',
                pass: 'aguebhrtpevnggpf'
            }
        });
        const mailOptions = {
            from: 'lm3654725@gmail.com',
            to: email,
            subject: subject,
            text: text
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error: Something went wrong. Please try again.');
    }
});