import React, { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [success]);

  const handlesubmit = (e) => {
    e.preventDefault();
    {
      /*Name Validation */
    }
    if (name.trim() === "") {
      setNameError("Please enter your name");
      return;
    }
    setNameError("");

    const cleanedName = name.trim();

    {
      /*Email Validation */
    }
    if (email.trim() === "") {
      setEmailError("Please enter your Email");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email ");
      return;
    }
    setEmailError("");
    const cleanedEmail = email.trim().toLowerCase();

    /*Subject validation */
    if (subject.trim() === "") {
      setSubjectError("Please enter a Subject");
      return;
    }
    setSubjectError("");
    const cleanedSubject = subject.trim();
    {
      /*Message validation */
    }
    if (message.trim() === "") {
      setMessageError("Please enter a Message");
      return;
    }
    setMessageError("");
    const cleanedMessage = message.trim();

    console.log("Name:", cleanedName);
    console.log("Email:", cleanedEmail);
    console.log("Subject:", cleanedSubject);
    console.log("Message:", cleanedMessage);

    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mt-4">
            Have a question? We'd love to hear from you.
          </p>
          <form
            onSubmit={handlesubmit}
            noValidate
            className="mt-10 bg-white rounded-2xl shadow-sm p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/*Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                    setSuccess(false);
                  }}
                  className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition ${
                    nameError
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-500  focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                {nameError && (
                  <p className="text-red-600 text-sm mt-1" role="alert">
                    {nameError}
                  </p>
                )}
              </div>
              {/*Email field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSuccess(false);
                    setEmailError("");
                  }}
                  className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition ${
                    emailError
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-500  focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                {emailError && (
                  <p className="text-red-600 text-sm mt-1" role="alert">
                    {emailError}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 space-y-6">
              {/*Subject field */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    setSuccess(false);
                    setSubjectError("");
                  }}
                  className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition ${
                    subjectError
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-500  focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                {subjectError && (
                  <p className="text-red-600 text-sm mt-1" role="alert">
                    {subjectError}
                  </p>
                )}
              </div>
              {/*Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your Message..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setSuccess(false);
                    setMessageError("");
                  }}
                  rows="5"
                  maxLength={500}
                  className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition resize-none ${
                    messageError
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-500  focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                <div className="flex flex-end">
                  <span className="text-xs text-gray-500">
                    {message.length}/500
                  </span>
                </div>
                {messageError && (
                  <p className="text-red-600 text-sm mt-1" role="alert">
                    {messageError}
                  </p>
                )}
              </div>
              {/*Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>

            {success && (
              <div
                className="fixed top-6 right-6 z-50 w-80 overflow-hidden rounded-lg bg-green-600 shadow-lg animate-[slideIn_0.3s_ease-out]"
                role="status"
              >
                <div className="px-4 py-3 text-sm text-white">
                  Message sent successfully.
                </div>

                <div className="h-0.5 bg-green-600">
                  <div className="h-full bg-white animate-[shrink_5s_linear_forwards]" />
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
