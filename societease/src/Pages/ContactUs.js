import React, { useState } from 'react';
import contatusbg from '../assets/COntactus.jpg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    societyName: '',
    location: '',
    city: '',
    mobileNo: '',
    email: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.mobileNo) {
      errors.mobileNo = 'Mobile number is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.description) {
      errors.description = 'Description is required';
    }
    setErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit form logic goes here
    }

    alert('Form submitted');
  };

  return (
    <div className="min-h-screen flex items-center  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center" 
    style={{ backgroundImage: `url(${contatusbg})` }}>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <section id="contact-section">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div class="relative z-0 w-full mb-5 group">
              <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"

            style={{ textAlign: "left" }}   

              htmlFor="name" className="block text-lg mb-2" >
                Name</label>
              <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="relative z-0 w-full mb-5 group" >
              <label
            style={{ textAlign: "left" }}   

              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
              
              htmlFor="societyName" className="block text-lg mb-2">Society Name</label>
              <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              
                type="text"
                id="societyName"
                name="societyName"
                value={formData.societyName}
                onChange={handleChange}
              />
            </div>
            <div class="relative z-0 w-full mb-5 group" >
              <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
            style={{ textAlign: "left" }}   
              
              htmlFor="location" className="block text-lg mb-2">Location</label>
              <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div class="relative z-0 w-full mb-5 group" >
              <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
            style={{ textAlign: "left" }}   
              
              htmlFor="city" className="block text-lg mb-2">City</label>
              <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
            style={{ textAlign: "left" }}   
              
              htmlFor="mobileNo" className="block text-lg mb-2">Mobile No.</label>
              <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                type="text"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
              />
              {errors.mobileNo && <p className="text-red-500 mt-1">{errors.mobileNo}</p>}
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <label 
              class="block mb-2 text-sm font-medium font-bold text-gray-10000 dark:text-white"
            style={{ textAlign: "left" }}   
              
              htmlFor="email" className="block text-lg mb-2">Email ID *</label>
              <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div class="max-w-sm mx-auto">
              <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            style={{ textAlign: "left" }}   
            
            htmlFor="description" >How can we help you?</label>
              <input
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
placeholder='Describe your Message here'
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && <p className="text-red-500 mt-1">{errors.description}</p>}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
