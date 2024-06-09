import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import ReCAPTCHA from 'react-google-recaptcha';

Modal.setAppElement('#root');

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    phone_number: '',
    subject: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(value !== null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.user_email.includes('@') && termsAccepted && captchaValid) {
      const formDataWithFile = new FormData(form.current);
      if (file) {
        formDataWithFile.append('file', file);
      }

      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          formDataWithFile,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            setFormData({
              first_name: '',
              last_name: '',
              user_email: '',
              phone_number: '',
              subject: '',
              message: '',
            });
            setFile(null);
            setTermsAccepted(false);
            setCaptchaValid(false);
            setModalIsOpen(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message, please try again.');
          },
        );
    } else {
      alert(
        'Please fill in all required fields, accept the terms, and complete the reCAPTCHA.',
      );
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      className="max-w-3xl mx-auto my-10 p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      style={{ marginTop: '2rem', fontFamily: 'math' }}
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
        Contact Me
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <label className="block">
            <span className="text-gray-800 dark:text-gray-300">
              First Name:
            </span>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
              placeholder="Enter your first name"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-800 dark:text-gray-300">Last Name:</span>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
              placeholder="Enter your last name"
              required
            />
          </label>
          <label className="block">
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
          <label className="block">
            <span className="text-gray-800 dark:text-gray-300">
              Phone Number:
            </span>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
              placeholder="Enter your phone number (optional)"
            />
          </label>
        </div>
        <label className="block mb-4">
          <span className="text-gray-800 dark:text-gray-300">Subject:</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            placeholder="Enter the subject"
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
        <label className="block mb-4">
          <span className="text-gray-800 dark:text-gray-300">
            Upload File (optional):
          </span>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
          />
          <small className="text-gray-600 dark:text-gray-400">
            File cannot exceed 20MB.
          </small>
        </label>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            name="terms"
            checked={termsAccepted}
            onChange={handleTermsChange}
            className="mr-2"
          />
          <span className="text-gray-800 dark:text-gray-300">
            I accept the{' '}
            <a href="#" className="text-indigo-600 dark:text-indigo-400">
              terms and conditions
            </a>
          </span>
        </label>
        <div className="mb-6">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>
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
