# install Express & Nodemailer

# install nodemailer-mailgun-transport

# sign up at mailgun.com for testing for it to work or you must have or use there site to create a domain

#so as long as you have host with an smtp it should work

# create package.json with a main entry point of whatever you like then a script tag to match so you can run npm run ETC...

# In order to send mail from your app.js or server.js

# create a seperate mail.js file that connects to your index.html or contact.html file in a folder called views were you can store your form data.

const sendMail = require('./mail');

sendMail(email, subject, text, function(err, data) {
if (err) {
return console.log('Error occurs);
}
return console.log('Message sent!!!');
});
