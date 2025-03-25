import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import ReCAPTCHA from 'react-google-recaptcha';
import { BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

  const handleCaptchaChange = (value) => {
    setCaptchaValid(value !== null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Form Data: ', formData);
    console.log('File: ', file);
    console.log('Captcha Valid: ', captchaValid);

    if (formData.user_email.includes('@') && captchaValid) {
      const formDataObject = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        user_email: formData.user_email,
        phone_number: formData.phone_number,
        subject: formData.subject,
        message: formData.message,
      };

      if (file) {
        if (file.size > 20 * 1024 * 1024) {
          alert('File size exceeds 20MB limit.');
          return;
        }

        const storageRef = ref(storage, `uploads/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            formDataObject.file_url = downloadURL;

            emailjs
              .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formDataObject,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
              )
              .then(
                (result) => {
                  console.log('SUCCESS!', result.text);
                  setFormData({
                    first_name: '',
                    last_name: '',
                    user_email: '',
                    phone_number: '',
                    subject: '',
                    message: '',
                  });
                  setFile(null);
                  setCaptchaValid(false);
                  setModalIsOpen(true);
                },
                (error) => {
                  console.log('FAILED...', error.text);
                  alert('Failed to send message, please try again.');
                },
              );
          });
        });
      } else {
        emailjs
          .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formDataObject,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
          )
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              setFormData({
                first_name: '',
                last_name: '',
                user_email: '',
                phone_number: '',
                subject: '',
                message: '',
              });
              setFile(null);
              setCaptchaValid(false);
              setModalIsOpen(true);
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Failed to send message, please try again.');
            },
          );
      }
    } else {
      alert('Please fill in all required fields and complete the reCAPTCHA.');
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="section bg-leather" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-center text-4xl font-bold mt-10 mb-6 text-indigo-600"
            style={{ fontFamily: 'math' }}
          >
            Contact Me
          </h2>
          <p className="text-paragraph mb-4 lg:mb-12 max-w-[800px]">
            If you have any questions or need clarification on anything, please
            feel free to reach out. I&apos;m here to assist! 👩‍💻
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mt-24 lg:mt-24 lg:pt-2">
            <div className="flex flex-col lg:flex-row gap-x-4">
              <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                <BsEnvelope />
              </div>
              <div>
                <h4 className="font-body text-xl mb-1">Have a question?</h4>
                <p className="mb-1">Email me at:</p>
                <p>
                  <a href="mailto:yukitoshi.imaizumizhou@gmail.com">
                    yukitoshi.imaizumizhou@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-4">
              <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                <BsGeoAlt />
              </div>
              <div>
                <h4 className="font-body text-xl mb-1">Current location</h4>
                <p className="mb-1">Sydney, Australia</p>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 w-full max-w-[780px]"
          >
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
                <span className="text-gray-800 dark:text-gray-300">
                  Last Name:
                </span>
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
        </div>
      </div>

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
    </section>
  );
};

export default Contact;
