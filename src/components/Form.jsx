import React, { useEffect, useState } from "react";
import ListIcon from "../assets/images/icon-list.svg";
import MobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Form({ email, setEmail }) {
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setisEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;
    if (isEmpty) {
      timeout = setTimeout(() => {
        setisEmpty(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [isEmpty]);

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setisEmpty(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    if (isValidEmail) {
      localStorage.setItem("email", email);
      navigate("/success");
    }
  }

  return (
    <motion.div
      className="Sign__Up"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <div className="text__content">
        <h1>Stay updated! </h1>
        <div className="updates">
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div>
            <img src={ListIcon} alt="" />
            <p>Product discovery and building what matters</p>
          </div>
          <div>
            <img src={ListIcon} alt="" />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div>
            <img src={ListIcon} alt="" />
            <p>And much more!</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="input">
            Email address
            {(!isValid || isEmpty) && (
              <span className="error">
                {isEmpty ? "The field cannot be empty" : "Valid email required"}
              </span>
            )}
          </label>
          <input
            className={!isValid ? "error" : ""}
            type="email"
            id="input"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="image_content"></div>
      <div className="mobile__image">
        <img src={MobileImage} alt="" />
      </div>
    </motion.div>
  );
}

export default Form;
