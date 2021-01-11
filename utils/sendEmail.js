const SENDGRID_API = "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send";
const sendEmail = async ({ name, email, text }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": process.env.RAPID_KEY,
      "x-rapidapi-host": process.env.RAPID_HOST,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "gthakur581@gmail.com",
            },
          ],
          subject: `New Email Received from ${name}`,
        },
      ],
      from: {
        email,
        name,
      },
      content: [
        {
          type: "text/html",
          value: text + ` ${process.env.CODE}`,
        },
      ],
    }),
  });
};
export { sendEmail };
