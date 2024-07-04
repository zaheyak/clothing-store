import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signIn.module.css";

const SignIn = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      username: formData.get("username"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("/admin/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.success);
        navigate("/login");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error adding user:", error.message);
      setMessage("Failed to add user, UserName or Email already exists");
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
              className={styles.svg_icon}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
              ></path>
            </svg>
            <h1 className={styles.form_heading}>Sign In</h1>
          </div>
          <div className={styles.field}>
            <label htmlFor="title" className={styles.label}>
              Full Name
            </label>
            <input
              name="name"
              className={styles.input}
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />

            <label className={styles.label}>Email</label>
            <input
              name="email"
              className={styles.input}
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="address" className={styles.label}>
              Address
            </label>
            <input
              name="address"
              className={styles.input}
              type="text"
              id="address"
              required
            />

            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              className={styles.input}
              name="username"
              type="text"
              placeholder="Enter Username"
              id="username"
              required
            />

            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              className={styles.input}
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={styles.field}>
            <button type="submit" className={styles.button}>
              Add
            </button>
          </div>
          <div className={styles.msg}>{message}</div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
