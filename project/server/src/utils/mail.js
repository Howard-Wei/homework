import nodemailer from 'nodemailer'
import mailCfg from '../config/mailCfg'

// async..await is not allowed in global scope, must use a wrapper
async function send(sendInfo) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.126.com",
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailCfg.user, // generated ethereal user
      pass: mailCfg.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  return await transporter.sendMail({
    from: '"ginus-chris" <whw1990126@126.com>', // sender address
    to: sendInfo.user, // list of receivers
    subject: "找回密码", // Subject line
    text: "找回密码", // plain text body
    html: mailCfg.replyPassTemplate(sendInfo, 'http://www.baidu.com'), // html body
  });
}

export default send
