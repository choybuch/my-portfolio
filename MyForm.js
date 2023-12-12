import React, { useState } from 'react';
import './React.css'; // Import the provided CSS

const MyForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    message: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    showNotification('Form submitted successfully!', 'success');

    // Optionally: Reset form fields after successful submission
    setFormData({
      name: '',
      email: '',
      number: '',
      address: '',
      message: '',
    });
  };

  // Function to show notification
  const showNotification = (message, type) => {
    // You can replace this with your preferred notification library or implementation
    alert(message);
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="container">
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input"
          />
          <label className="label">Your Name</label>
        </div>

        {/* ... (other form fields) ... */}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MyForm;
