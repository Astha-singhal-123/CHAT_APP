import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { login } from "../utils/APIroutes";
import bcrypt from "bcryptjs";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, username } = values;
    const { data } = await axios.post(login, {
      username,
      password
    });
    if (data.status === false) {
      toast.error(data.msg, toastoptions);
    } else {
      localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      navigate("/");
    }
  };

  const toastoptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Formcontainor>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <h1>Chat-App</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Dont have an account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </Formcontainor>
      <ToastContainer />
    </>
  );
}

const Formcontainor = styled.div``;
export default Login;
