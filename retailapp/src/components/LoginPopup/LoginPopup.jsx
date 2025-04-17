import React, { useState } from "react";
import "./LoginPopup.css";
import Registration from "../../services/Registration";

const LoginPopup = ({ setShowLogin }) => {
  const [action, setAction] = useState("Login");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [role, setRole] = useState("");
  const [msg, setMag] = useState("");

  const [Reg, setUser] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
    password: "",
    role: "",
    secret_code: ""
  });

  const uniHandler = (e) => {
    setUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === "Sign Up") {
      Registration.createUser(Reg)
        .then((res) => {
          setMag(res.data);
          setIsSubmitted(true);
        })
        .catch((err) => {
          setMag("Error: " + err.message);
        });
    } else if (action === "Login") {
      const loginData = {
        email: Reg.email,
        password: Reg.password,
      };

      Registration.loginUser(loginData)
        .then((res) => {
          setMag(res.data);
          setIsSubmitted(true);
        })
        .catch((err) => {
          setMag("Login failed: " + err.message);
        });
    }
  };

  // Image paths
  const userIcon = "/imgg/user.png";
  const emailIcon = "/imgg/mail.png";
  const contactIcon = "/imgg/contact.png";
  const addressIcon = "/imgg/address.png";
  const passwordIcon = "/imgg/password.png";

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
                  <input
                    type="text" name="name"  value={Reg.name}  placeholder="Full Name" required
                    onChange={uniHandler}
                  />
                </div>
                <div className="input">
                  <img src={contactIcon} alt="Contact" />
                  <input
                    type="tel" name="contact" value={Reg.contact}  placeholder="Contact Number"
                    required  onChange={uniHandler}
                  />
                </div>
                <div className="input">
                  <img src={addressIcon} alt="Address" />
                  <input
                    type="text"     name="address"      value={Reg.address}
                    placeholder="Address" required   onChange={uniHandler}
                  />
                </div>

                <div className="input">
                  <select
                    name="role"
                    style={{ width: "100%", padding: "8px" }}
                    required
                    onChange={(e) => {
                      setRole(e.target.value);
                      uniHandler(e);
                    }}
                  >
                    <option value="">Select Role</option>
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {(role === "seller" || role === "admin") && (
                  <div className="input">
                    <input
                      type="password"  name="secret_code"   placeholder="Enter Role Code"   required
                      onChange={uniHandler}
                    />
                  </div>
                )}
              </>
            )}

            <div className="input">
              <img src={emailIcon} alt="Email" />
              <input
                type="email"     name="email"    value={Reg.email} placeholder="Email"
                required   onChange={uniHandler}
              />
            </div>

            <div className="input">
              <img src={passwordIcon} alt="Password" />
              <input
                type="password"  name="password" value={Reg.password}
                placeholder="Password"required
                onChange={uniHandler}
              />
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
              onClick={() => {
                setAction((prev) => (prev === "Sign Up" ? "Login" : "Sign Up"));
                setIsSubmitted(false);
                setMag("");
              }}
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

          {msg && <div className="response-msg">{msg}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
