import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMIN}/contact`, // Update with your backend URL
        formData
      );
      console.log("Contact form submitted successfully:", response.data);
      toast.success("Contact form submitted successfully");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Error submitting contact form");
    }
  };

  return (
    <div className="w-full max-w-md bg-white mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
