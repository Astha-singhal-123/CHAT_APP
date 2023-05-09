import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Chat() {
  const navigate = useNavigate();
  const toastoptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  };
  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    }
  });
  return (
    <>
      <Container>

      </Container>
      <ToastContainer />
    </>
  );
}
const Container = styled.div``;
export default Chat;
