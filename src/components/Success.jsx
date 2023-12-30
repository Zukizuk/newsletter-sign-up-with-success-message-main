import React, { useEffect } from "react";
import ListIcon from "../assets/images/icon-list.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Success({ email, setEmail }) {
  if (!email) {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      email = storedEmail;
    }
  }
  return (
    <motion.div
      className="Success"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      exit={{ opacity: 0 }}
    >
      <img src={ListIcon} alt="" />

      <div className="message">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <span> {email} </span>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <Link to="/" className="btn" onClick={() => setEmail("")}>
        Dismiss message
      </Link>
    </motion.div>
  );
}

export default Success;
