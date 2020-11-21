import React, { useState } from "react";

import "./LoginPage.scss";

interface LoginPageProps {
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginPage = (props: LoginPageProps) => {
  const { roomName, setRoomName, userName, setUserName, setConnected } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName !== "" && roomName !== "") {
      setConnected(true);
    } else {
      alert("Please fill out all the fields");
    }
  };

  return (
    <div className="login-page">
      <h1>One Hour World Builders</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <label htmlFor="roomName">Room Name</label>
        <input
          value={roomName}
          id="roomName"
          onChange={(e) => setRoomName(e.target.value)}
        ></input>
        <label htmlFor="userName">User Name</label>
        <input
          value={userName}
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="submit"
          value="Enter Room"
          disabled={roomName === null && userName === null}
        />
      </form>
    </div>
  );
};
