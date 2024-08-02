import express, { Request, Response } from "express";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "maryaamkhanzada@gmail.com",
    pass: "yjhg lrqp elie hobh",
  },
});

export const sendMail = (req: Request, res: Response) => {
  const { cart, subTotal, discount, grandTotal, userEmail } = req.body;
  const cartDetails = cart
    .map(
      (product: any) => `Product: ${product.name}\nPrice: ${product.price}\n`
    )
    .join("\n\n");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "FHC HEALTH - THANKYOU FOR SHOPPING",
    text: `Cart Details:\n\n${cartDetails}\n\nSub Total: ${subTotal}\nDiscount: ${discount}\nGrand Total: ${grandTotal}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending mail", error);
      res.status(500).send("Error sending mail");
    } else {
      console.log("Email sent", info.response);
      res.status(200).send("Email sent: " + info.response);
    }
  });
};
