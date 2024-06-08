// Contact form sends live email 
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.user_email.includes("@")) {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setFormData({ user_name: "", user_email: "", message: "" });
            setModalIsOpen(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed to send message, please try again.");
          }
        );
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      className="max-w-lg mx-auto my-10 p-8 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      style={{ fontFamily: "math" }}
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
        Contact Me
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <label className="block mb-4">
          <span className="text-gray-800 dark:text-gray-300">Name:</span>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            placeholder="Enter your name"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-800 dark:text-gray-300">Email:</span>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            placeholder="Enter your email"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-800 dark:text-gray-300">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700"
        >
          Submit
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Message Sent Successfully!
          </h2>
          <p>Thank you for your message. We will get back to you shortly.</p>
          <button
            onClick={closeModal}
            className="mt-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-4 py-2 rounded-full"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
