const { emailServices, utilServices } = require("../services");

const contactUs = async (req, res) => {
  try {
    const { name, email, phone, comment } = req.body;
    if (!name || !email || !phone || !comment) {
      return res.status(422).send({ message: "Cannot accept an empty field!" });
    }
    if (!utilServices.isValidEmailFormat(email))
      return res.status(422).send({ message: "Wrong Format for Email!" });

    emailServices.sendEmail(
      process.env.ADMIN_EMAIL_ADDRESS,
      `CONTACT US - New Request`,
      `\n
       Name: ${name}\n
       Email: ${email}\n
       Phone: ${phone}\n
       Comment: ${comment}\n`
    );

    return res.status(200).json({
      message: "Your message has been recieved. We'll get back to you shortly.",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Something went wrong at our end. Try at some other time!",
    });
  }
};

module.exports = {
  contactUs,
};
