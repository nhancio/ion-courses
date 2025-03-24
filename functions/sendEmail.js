const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { firstName, lastName, email, phone, education, passingYear, message } = JSON.parse(event.body);

    const msg = {
      to: 'nithindidigam@gmail.com', // Updated email address
      from: 'nithindidigam@gmail.com', // Replace with a verified sender email
      subject: 'New Contact Form Submission',
      text: `
        You have a new contact form submission:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Education: ${education}
        Passing Year: ${passingYear}
        Message: ${message}
      `,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
