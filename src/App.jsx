import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    countryCode: "+91",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notification, setNotification] = useState("");

  const validateForm = () => {
    let tempErrors = {};
    // First Name
    if (formData.firstName && !/^[a-zA-Z]{2,}$/.test(formData.firstName.trim())) {
      tempErrors.firstName = "Enter a valid First Name";
    }
    // Last Name
    if (formData.lastName && !/^[a-zA-Z]{2,}$/.test(formData.lastName.trim())) {
      tempErrors.lastName = "Enter a valid Last Name";
    }
    // Username
    if (formData.userName && !/^[a-zA-Z0-9_]{3,}$/.test(formData.userName.trim())) {
      tempErrors.userName = "Enter a valid Username (min 3 chars, letters, numbers, _)";
    }
    // Email
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Enter a valid Email";
    }
    // Password
    if (formData.password && formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters and above";
    }
    // Confirm Password
    if (
      formData.confirmPassword &&
      formData.confirmPassword !== formData.password
    ) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    // Phone Number
    if (formData.phoneNo && !/^[0-9]{10}$/.test(formData.phoneNo.trim())) {
      tempErrors.phoneNo = "Enter a valid 10-digit Phone Number";
    }
    // PAN Number
    if (formData.panNo && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo.trim())) {
      tempErrors.panNo = "Enter a valid PAN Number (e.g., ABCDE1234F)";
    }
    // Aadhar Number
    if (formData.aadharNo && !/^[0-9]{12}$/.test(formData.aadharNo.trim())) {
      tempErrors.aadharNo = "Enter a valid 12-digit Aadhar Number";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimStart();
    setFormData((prev) => {
      const updated = { ...prev, [name]: trimmedValue };
      let tempErrors = {};
      // First Name
      if (updated.firstName && !/^[a-zA-Z]{2,}$/.test(updated.firstName.trim())) {
        tempErrors.firstName = "Enter a valid First Name";
      }
      // Last Name
      if (updated.lastName && !/^[a-zA-Z]{2,}$/.test(updated.lastName.trim())) {
        tempErrors.lastName = "Enter a valid Last Name";
      }
      // Username
      if (updated.userName && !/^[a-zA-Z0-9_]{3,}$/.test(updated.userName.trim())) {
        tempErrors.userName = "Enter a valid Username (min 3 chars, letters, numbers, _)";
      }
      // Email
      if (updated.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updated.email.trim())) {
        tempErrors.email = "Enter a valid Email";
      }
      // Password
      if (updated.password && updated.password.length < 6) {
        tempErrors.password = "Password must be at least 6 characters";
      }
      // Confirm Password
      if (updated.confirmPassword && updated.confirmPassword !== updated.password) {
        tempErrors.confirmPassword = "Passwords do not match";
      }
      // Phone Number
      if (updated.phoneNo && !/^[0-9]{10}$/.test(updated.phoneNo.trim())) {
        tempErrors.phoneNo = "Enter a valid 10-digit Phone Number";
      }
      // PAN Number
      if (updated.panNo && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(updated.panNo.trim())) {
        tempErrors.panNo = "Enter a valid PAN Number (e.g., ABCDE1234F)";
      }
      // Aadhar Number
      if (updated.aadharNo && !/^[0-9]{12}$/.test(updated.aadharNo.trim())) {
        tempErrors.aadharNo = "Enter a valid 12-digit Aadhar Number";
      }
      setErrors(tempErrors);
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setNotification("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        countryCode: "+91",
        phoneNo: "",
        country: "",
        city: "",
        panNo: "",
        aadharNo: "",
      });
      setShowPassword(false);
      setShowConfirmPassword(false);
      setErrors({});
    } else {
      setNotification("");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Registration Form</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h3>First Name</h3>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
        <h3>Last Name</h3>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
        <h3>Username</h3>
        <input
          type="text"
          name="userName"
          placeholder="Enter your UserName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        {errors.userName && <span className="error">{errors.userName}</span>}
        <h3>Email</h3>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <h3>Password</h3>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <img
              src={showPassword ? "/hidden.svg" : "/show.svg"}
              alt={showPassword ? "Hide" : "Show"}
              style={{ width: 24, height: 24 }}
            />
          </button>
        </div>
        {errors.password && <span className="error">{errors.password}</span>}
        <h3>Confirm Password</h3>
        <div className="password-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((s) => !s)}
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <img
              src={showConfirmPassword ? "/hidden.svg" : "/show.svg"}
              alt={showConfirmPassword ? "Hide" : "Show"}
              style={{ width: 24, height: 24 }}
            />
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
        <h3>Phone No.</h3>
        <div className="phone-input-container">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            required
          >
            <option value="+91">IN +91</option>
            <option value="+1">US +1</option>
            <option value="+44">GB +44</option>
            <option value="+61">AU +61</option>
          </select>
          <input
            type="tel"
            name="phoneNo"
            placeholder="Enter your Phone Number"
            value={formData.phoneNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
        <h3>Country</h3>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
        <h3>City</h3>
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
        </select>
        {errors.city && <span className="error">{errors.city}</span>}
        <h3>PAN No</h3>
        <input
          type="text"
          name="panNo"
          placeholder="Enter your Pan Number"
          value={formData.panNo}
          onChange={handleChange}
          required
        />
        {errors.panNo && <span className="error">{errors.panNo}</span>}
        <h3>Aadhar No</h3>
        <input
          type="text"
          name="aadharNo"
          placeholder="Enter your Aadhar Number"
          value={formData.aadharNo}
          onChange={handleChange}
          required
        />
        {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
        <div className="sumbit-btn">
          <button
            type="submit"
            disabled={
              Object.keys(errors).length > 0 ||
              Object.values(formData).some((v) => !v)
            }
          >
            Submit
          </button>
        </div>
        {notification && (
          <div className="notification-success">{notification}</div>
        )}
      </form>
    </div>
  );
}

export default App;
