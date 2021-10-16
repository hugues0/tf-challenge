import nodemailer from "nodemailer";

const dotenv = require("dotenv");

dotenv.config();

class mailer {
  static emailConfirmation(user) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 50%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Hi ${user.name}!</div>
                <div class="Email-wrapper_body_message">Welcome to AIMLAB, the team can not wait to have you on board.
    
                </br>  </br>  </br>   </div>
            </div>
        </div>
        </body>
        </html>`;
    return view;
  }

  static resetPassword(user, token) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 50%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Hi ${user.name}!</div>
                <div class="Email-wrapper_body_message">Here is your password rest link, click the link below.
    
                </br>  </br> 
                <tbody>
                            <tr>
                              <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;    display:flex; justify-content:center!important;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="http://${process.env.UI_URL}/api/v1/auth/reset/${token}" target="_blank" style="display: inline-block; color: #ffffff; background-color: #000; border: solid 1px #000; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #000;font-family: 'Montserrat', sans-serif; font-weight:bold;">Reset</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                </br>   </div>
            </div>
        </div>
        </body>
        </html>`;
    return view;
  }

  static async sendEmail(to, subject, views) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    /**
     * This is an object which include email data (mail option)
     */
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to,
      subject,
      html: views,
    };

    await transporter.sendMail(mailOptions);
  }
}

export default mailer;
