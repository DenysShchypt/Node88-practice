import nodemailer from "nodemailer";
import "dotenv/config";

const { UKR_NET_FROM, UKR_NET_PASSWORD } = process.env;
console.log(UKR_NET_FROM, UKR_NET_PASSWORD);

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465, //25 465 2525
  secure: true,
  auth: {
    user: UKR_NET_FROM,
    pass: UKR_NET_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

export const sendMail = (data) => {
  const email = { ...data, from: UKR_NET_FROM };
  return transport.sendMail(email);
};
