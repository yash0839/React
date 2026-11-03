
import React, { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    setSuccess("");

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Registration successful!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="form-control mb-2"
          value={formData.firstName}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.firstName}</p>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="form-control mb-2"
          value={formData.lastName}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.lastName}</p>

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
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-control mb-2"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.confirmPassword}</p>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

      </form>

      {success && (
        <h5 className="text-success mt-3">{success}</h5>
      )}
    </div>
  );
}

export default Registration;
