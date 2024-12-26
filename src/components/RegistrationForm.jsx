import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.address = formData.address ? "" : "Address is required";
    tempErrors.mobile =
      /^[0-9]{10}$/.test(formData.mobile) ? "" : "Valid 10-digit mobile number is required";
    tempErrors.email =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
        ? ""
        : "Valid email is required";
    tempErrors.gender = formData.gender ? "" : "Gender is required";
    tempErrors.dob = formData.dob ? "" : "Date of birth is required";
    tempErrors.course = formData.course ? "" : "Course selection is required";

    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
      console.log("User Data:", formData);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Higher Secondary Admission</h2>
      <form onSubmit={handleRegister} className="registration-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          <div className="error">{errors.name}</div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          ></textarea>
          <div className="error">{errors.address}</div>
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your 10-digit mobile number"
          />
          <div className="error">{errors.mobile}</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <div className="error">{errors.email}</div>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
          <div className="error">{errors.gender}</div>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <div className="error">{errors.dob}</div>
        </div>
        <div className="form-group">
          <label>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
          <div className="error">{errors.course}</div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="register-btn">
            Register
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;