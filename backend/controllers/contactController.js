const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const cleanedName = name?.trim();
  const cleanedEmail = email?.trim().toLowerCase();
  const cleanedSubject = subject?.trim();
  const cleanedMessage = message?.trim();
  try {
    if (!cleanedName || !cleanedEmail || !cleanedSubject || !cleanedMessage) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanedEmail)) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }
    const contact = await Contact.create({
      name: cleanedName,
      email: cleanedEmail,
      subject: cleanedSubject,
      message: cleanedMessage,
    });

    res.status(201).json({
      message: "Contact message received successfully",
      contact,
    });
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid contact data",
      });
    }

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { createContact };
