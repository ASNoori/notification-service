require('dotenv').config(); 
import { createTransport } from 'nodemailer';

async function sendEmail({ to, subject, text }) {
    const transporter = createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,       
          pass: process.env.EMAIL_PASS, 
        }
      });
    }

export default { sendEmail };