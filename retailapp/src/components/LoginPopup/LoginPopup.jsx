import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [action, setAction] = useState("Login");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [role, setRole] = useState("");

  // Public folder image references
  const userIcon = "/imgg/user.png";
  const emailIcon = "/imgg/mail.png";
  const contactIcon = "/imgg/contact.png";
  const addressIcon = "/imgg/address.png";
  const passwordIcon = "/imgg/password.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setShowLogin(false); // Close popup
    }, 3000);
  };

  return (
    <div className="login-popup" onClick={() => setShowLogin(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShowLogin(false)}>✖</button>

        <h2 className="popup-title">{action}</h2>

        {isSubmitted && <div className="success-message">{action} Successful!</div>}

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            {action === "Sign Up" && (
              <>
                <div className="input">
                  <img src={userIcon} alt="User" />
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="input">
                  <img src={contactIcon} alt="Contact" />
                  <input type="tel" placeholder="Contact Number" required />
                </div>
                <div className="input">
                  <img src={addressIcon} alt="Address" />
                  <input type="text" placeholder="Address" required />
                </div>

                {/* Role Selection */}
                <div className="input">
                  <select
                    style={{ width: "100%", padding: "8px" }}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {/* Secret Code field for seller/admin */}
                {(role === "seller" || role === "admin") && (
                  <div className="input">
                    <input
                      type="password"
                      placeholder="Enter Role Code"
                      name="secret_code"
                      required
                    />
                  </div>
                )}
              </>
            )}

            <div className="input">
              <img src={emailIcon} alt="Email" />
              <input type="email" placeholder="Email" required />
            </div>

            <div className="input">
              <img src={passwordIcon} alt="Password" />
              <input type="password" placeholder="Password" required />
            </div>
          </div>

          {action === "Login" && (
            <div className="forgot-password">
              Forgot Password? <span className="highlight">Reset</span>
            </div>
          )}

<div className="submit-container">
  <button
    type="button"
    className={`submit ${action === "Login" ? "gray" : ""}`}
    onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}
  >
    {action === "Sign Up" ? "Login" : "Sign Up"}
  </button>
  <button
    type="submit"
    className={`submit ${action === "Sign Up" ? "gray" : ""}`}
  >
    {action}
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
