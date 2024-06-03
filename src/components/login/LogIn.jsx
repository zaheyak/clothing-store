// src/components/Login.js
import React from "react";
import "./login.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <main class="card">
        <form
          className="form card"
          action="/login/check-user"
          id="main-form"
          method="POST"
        >
          <div className="card_header">
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
            <h1 className="form_heading">Log In</h1>
          </div>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Username"
              id="username"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="field">
            <button className="button" type="submit">
              Login
            </button>
          </div>
          <div className="mesg"></div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
