"use client";

import React, { useState } from "react";
import Input from "@/components/ui/contact/Input";
import TextArea from "@/components/ui/contact/TextArea";
import ConfirmModal from "@/components/ui/contact/ConfirmModal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3 || formData.name.length > 32) {
      newErrors.name = "Name must be between 3 and 32 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Email must be in a valid format.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 3 || formData.message.length > 80) {
      newErrors.message = "Message must be between 3 and 80 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        setShowModal(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-screen flex justify-center bg-black text-white mt-2 md:mt-10">
      <div className="flex flex-col justify-center p-10 md:rounded-lg bg-gray-900 md:w-2/3 lg:w-1/3">
        <div className="mb-8">
          <h3 className="text-2xl font-bold">We'd love to hear from you</h3>
          <p className="text-gray-400">
            Reach out and we'll get in touch within 24 hours
          </p>
        </div>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <Input
            id="name"
            label="Name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            id="email"
            label="Email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextArea
            id="message"
            label="Message"
            placeholder="Leave us a message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-200 text-gray-800 hover:text-black w-full font-semibold px-4 py-2 rounded mt-2"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      {showModal && (
        <ConfirmModal formData={formData} handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default ContactForm;
