"use server"
import { createTransport } from 'nodemailer';
import { dbCloseConnection, dbConnect } from '@/models';
import ContactInquiry from '@/models/ContactInquiry';


export const saveContactInquiry = async ({ firstName, lastName, email, mobile, interestedIn, message }) => {
    try {
        const db = await dbConnect();

        const contactInquiryToCreate = new ContactInquiry({ firstName, lastName, email, mobile, interestedIn, message });
        const contactInquiry = await contactInquiryToCreate.save();
        console.log(contactInquiry);

        const transporter = createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            },
        });

        const emailBody = `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0056b3;">New Inquiry from Your Portfolio Website</h2>
          <p style="font-size: 14px;"><strong>Date:</strong> ${new Date()}</p>
          <p style="font-size: 14px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p style="font-size: 14px;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 14px;"><strong>Mobile:</strong> ${mobile}</p>
          <p style="font-size: 14px;"><strong>Interested In:</strong> ${interestedIn}</p>
          <p style="font-size: 14px;"><strong>Message:</strong></p>
          <p style="font-size: 14px; background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${message}</p>
        </div>`;

        const options = {
            from: process.env.EMAIL_FROM,
            to: "nsoumyaprakash@gmail.com",
            subject: `Contact Inquiry From ${firstName} ${lastName}`,
            html: emailBody
        };

        transporter.sendMail(options, (err, result) => {
            if (err) return console.log('Error: ', err);
            console.log('Email Sent: ', result);
        });

        return { status: true, message: "Thank You for contacting! I'll get back to you soon." };
    } catch (error) {
        console.log(error);
        return { status: false, error: error.message };
    } finally {
        await dbCloseConnection();
    }
};