const router = require('express').Router();
const nodemailer = require('nodemailer');
const config = require('../config/default.json');

const { gmail_user, gmail_pass } = config;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || gmail_user,
      pass: process.env.GMAIL_PASS || gmail_pass
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  })

router.post('/', (req, res, next) => {
    let { email, body } = req.body; // validation takes place on client side

    if (!email) return res.status(404).send('email is not provided');

      return transporter.sendMail({
            from: gmail_user,
            to: gmail_user,
            subject: 'TD-Photography - new email recieved',
            text: `from: ${email}
            \n\n ${body}`,
        }).then(response => {
            console.log(response);
            res.status(200).send()
        })
          .catch(err => next(err));
})

module.exports = router;