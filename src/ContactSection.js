import React, { useState } from "react";
import style from "../styles/ContactSection.module.css";
import { CircularProgress } from "@material-ui/core";
import { Fade } from "react-awesome-reveal";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        text: message + "(send from portfolio website)",
      }),
    })
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setEmail("");
        setName("");
        setMessage("");
        setTimeout(() => setSuccess(false), 15000);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };
  return (
    <div className={style.wrapper}>
      <div className="flex-1">
        <div className="justify-between flex-row lg:flex px-4 py-4 sm:mt-5 sm:px-32 xl:px-52 ">
          <div className="max-w-md md:pr-10 mb-10">
            <Fade duration={500} triggerOnce direction={"up"} cascade>
              <h2 className="font-bold text-3xl">Get in touch</h2>
              <p className="text-gray-500 text-lg my-3">
                The best way to contact me is by filling this form or by sending
                me an email. I'm also very active on Twitter.
              </p>
              <div className="flex my-3">
                <div className="h-6 w-6 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">+91-XXXXXXXXXX</p>
              </div>

              <div className="flex my-3">
                <div className="h-6 w-6 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">gthakur581@gmail.com</p>
              </div>
            </Fade>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-3xl lg:hidden">Send a Message</h2>
            {success ? (
              <p className="bg-blue-600 py-2 px-2 rounded text-white">
                Email Send Successfully! We'll get back to you as soon as
                possible.
              </p>
            ) : null}
            {error ? (
              <p className="bg-red-600 py-2 px-2 rounded text-white">
                There was some problem while sending the mail. Please try again
                later.
              </p>
            ) : null}
            <form onSubmit={onSubmitHandler}>
              <Fade
                duration={700}
                triggerOnce
                direction={"up"}
                big={false}
                cascade
              >
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="bg-gray-100 w-full py-3 px-2 my-3 text-lg rounded-xl focus:outline-none focus:ring-2"
                  placeholder="Full Name"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-gray-100 w-full py-3 px-2 my-3 text-lg rounded-xl focus:outline-none focus:ring-2"
                  placeholder="Email Address"
                />
                <textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="h-40 bg-gray-100 w-full py-3 px-2 my-3 text-lg rounded-xl focus:outline-none focus:ring-2"
                  placeholder="Enter your message"
                />
                {loading ? (
                  <CircularProgress />
                ) : (
                  <button
                    type="submit"
                    className="px-5 py-2 text-white rounded-md focus:outline-none hover:bg-blue-600 bg-blue-500 transform hover:-translate-y-1 duration-300 hover:scale-100 "
                  >
                    Submit
                  </button>
                )}
              </Fade>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
