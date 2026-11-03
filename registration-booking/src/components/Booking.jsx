
import React, { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.date) {
      newErrors.date = "Appointment date is required";
    } else if (
      formData.date < new Date().toLocaleDateString("en-CA")
    ) {
      newErrors.date = "Select today or a future date";
    }

    if (!formData.time) {
      newErrors.time = "Appointment time is required";
    }

    setErrors(newErrors);
    setSuccess("");

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Appointment booked successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: ""
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Clinic Booking Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-control mb-2"
          value={formData.fullName}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.fullName}</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.email}</p>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="form-control mb-2"
          value={formData.phone}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.phone}</p>

        <label>Appointment Date</label>
        <input
          type="date"
          name="date"
          className="form-control mb-2"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toLocaleDateString("en-CA")}
        />
        <p className="text-danger">{errors.date}</p>

        <label>Appointment Time</label>
        <input
          type="time"
          name="time"
          className="form-control mb-2"
          value={formData.time}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.time}</p>

        <button type="submit" className="btn btn-success">
          Book Appointment
        </button>

      </form>

      {success && (
        <h5 className="text-success mt-3">{success}</h5>
      )}
    </div>
  );
}

export default Booking;
