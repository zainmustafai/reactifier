import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="mx-auto p-6 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full dark:bg-dark dark:text-white bg-light text-dark px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary-dark focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full  dark:bg-dark dark:text-white bg-light text-dark px-3 py-2 rounded-md border-gray-300  dark:border-gray-700 focus:border-primary dark:focus:border-primary-dark focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full dark:bg-dark dark:text-white bg-light text-dark px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary-dark focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="dark:bg-dark dark:text-white bg-light text-dark w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary-dark focus:outline-none"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
