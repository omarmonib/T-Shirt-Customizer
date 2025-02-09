import React, { useState, useRef, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import "./LoginModal.css";
import Button from "./Button";

const Login = ({ onClose }) => {
  const { login } = useAuth();
  const [error, setError] = useState("");

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    setError("");

    const usernameValue = usernameRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();

    if (!usernameValue || !passwordValue) {
      setError(" الرجاء إدخال اسم المستخدم وكلمة المرور!");
      
      if (!usernameValue) {
        usernameRef.current.focus();
      } else {
        passwordRef.current.focus();
      }
      return;
    }

    login({ username: usernameValue });
    onClose();
  }, [login, onClose]);

  
  return (
    <div className="modal-overlay">
      <div className={`modal-content ${error ? "shake" : ""}`}>
        <span className="close-btn" onClick={onClose}>&times;</span>

        <h2>تسجيل الدخول</h2>

        {error && <p className="error-message" aria-live="assertive">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
          type="text"
          placeholder="اسم المستخدم"
          ref={usernameRef}
          autoFocus
          onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
          />
          
          <input
          type="password"
          placeholder="كلمة المرور"
          ref={passwordRef}
          onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
          />
          
          <Button type="submit" text="تسجيل الدخول" />
        </form>
      </div>
    </div>
  );
};

export default Login;
