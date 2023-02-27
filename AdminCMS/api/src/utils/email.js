// install and use the nodemailer
// configure the email server
// whom and what to sendemail

import nodemailer from "nodemailer";

const emailProcessing = async (emailInfo) => {
  try {
    // configure
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const result = await transporter.sendMail(emailInfo);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
    // send email here
  } catch (error) {
    console.log(error);
  }
};

// email temaplating
export const adminSignUpEmailVerification = ({ email, fName }, ul) => {
  // send mail with defined transport object
  let info = {
    from: `"Register Form" <${email}>'`, // sender address
    to: process.env.SMTP_USER, // list of receivers
    subject: "New user Verfication Email", // Subject line
    text: `Hi ${fName}, please follow the link to activate and vrefiy the link ${ul}`, // plain text body
    html: `
    <p> Hi ${fName}</p>,
    <br/>
    <br/>
    Please follow the link to verfiy your account:
    <br/>
    <br/>
    <a href="${ul}" style="color:red;font-weight :bolder;" >Verify Email </a>

    <br/>
    <br/>

    <p>
-------------------------
Customer Care Team
<br/>
Coding Team
    </p>
    
    
    `, // html body
  };

  emailProcessing(info);
};
