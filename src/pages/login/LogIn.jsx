import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("/login/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.success);
        navigate("/shop");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error checking user:", error.message);
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.card}>
        <form
          className={`${styles.form} ${styles.card}`}
          onSubmit={handleSubmit}
        >
          <div className={styles.card_header}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 24"
              width="30"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
              ></path>
            </svg>
            <h1 className={styles.form_heading}>Log In</h1>
          </div>
          <div className={styles.field}>
            <label htmlFor="username">Username</label>
            <input
              className={styles.input}
              name="username"
              type="text"
              placeholder="Username"
              id="username"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.input}
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              required
            />
          </div>
          <div className={styles.field}>
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
          <div className={styles.msg}>{message}</div>
        </form>
      </main>
    </div>
  );
};

export default Login;
