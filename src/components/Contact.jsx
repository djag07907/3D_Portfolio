// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Contact.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to display the contact me section.
// @details
// ------------------------------------------------------------------ -->

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_oulsx7x
// service_t2jt0hb
// RDHig-TwdMFXcUQev

// Base contact form internal structure
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Contact form post send load
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!form.name) {
      errors.name = "Please enter your name.";
    }
    if (!form.email) {
      errors.email = "Please enter your email.";
    }
    if (!form.message) {
      errors.message = "Please enter your message.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setLoading(true);

    emailjs
      .send(
        "service_t2jt0hb",
        "template_oulsx7x",
        {
          from_name: form.name,
          to_name: "Daniel",
          from_email: form.email,
          to_email: "josamogax@gmail.com",
          message: form.message,
        },
        "RDHig-TwdMFXcUQev"
      )
      .then(
        () => {
          setLoading(false);
          setShowSuccessModal(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          setShowErrorModal(true);
        }
      );
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-tertiary rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-[#804dee]"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#804dee] to-[#bf61ff] rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">
                Message Sent!
              </h3>
              <p className="text-secondary text-base mb-6">
                Thank you for reaching out! I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-[#804dee] to-[#bf61ff] py-3 px-8 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-tertiary rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-red-500"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">Oops!</h3>
              <p className="text-secondary text-base mb-6">
                Something went wrong. Please try again or contact me directly at
                daniel.alvarez@sonofalvasolutions.com
              </p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-gradient-to-r from-red-500 to-red-700 py-3 px-8 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow:hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Let's get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact me</h3>
          {/* Form structure */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {/* Name input */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
              {validationErrors.name && (
                <span className="text-red-500">{validationErrors.name}</span>
              )}
            </label>
            {/* Email input */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your e-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your e-mail?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
              {validationErrors.email && (
                <span className="text-red-500">{validationErrors.email}</span>
              )}
            </label>
            {/* Message input */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you require?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
              {validationErrors.message && (
                <span className="text-red-500">{validationErrors.message}</span>
              )}
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          // variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
