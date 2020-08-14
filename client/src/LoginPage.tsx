import React, { useState } from "react";

import "./LoginPage.scss";

interface LoginPageProps {
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

enum LoginState {
  "Main",
  "Create",
  "Join"
}

export const LoginPage = (props: LoginPageProps) => {
  const { roomName, setRoomName, userName, setUserName, setConnected } = props;

  const [loginPageState, setLoginPageState] = useState<LoginState>(
    LoginState.Main
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName !== "" && roomName !== "") {
      setConnected(true);
    } else {
      alert("Please fill out all the fields");
    }
  };

  const renderMain = () => {
    return (
      <div className="selection-buttons">
        <button onClick={() => setLoginPageState(LoginState.Create)}>
          Create a room
        </button>
        <button onClick={() => setLoginPageState(LoginState.Join)}>
          Join a room
        </button>
      </div>
    );
  };

  const renderCreate = () => {
    return (
      <form onSubmit={e => handleSubmit(e)} className="login-form">
        <label htmlFor="roomName">Room Name</label>
        <input
          value={roomName}
          id="roomName"
          onChange={e => setRoomName(e.target.value)}
        ></input>
        <label htmlFor="userName">User Name</label>
        <input
          value={userName}
          id="userName"
          onChange={e => setUserName(e.target.value)}
        ></input>
        <input
          type="submit"
          value="Create Room"
          disabled={roomName === null && userName === null}
        />
      </form>
    );
  };

  const renderJoin = () => {
    return (
      <form onSubmit={e => handleSubmit(e)} className="login-form">
        <input
          placeholder="Roomname"
          value={roomName}
          onChange={e => setRoomName(e.target.value)}
        ></input>
        <input
          placeholder="Username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        ></input>
        <input type="submit" />
      </form>
    );
  };

  return (
    <div className="login-form">
      <h1>One Hour World Builders</h1>
      {loginPageState === LoginState.Main && renderMain()}
      {loginPageState === LoginState.Create && renderCreate()}
      {loginPageState === LoginState.Join && renderJoin()}
    </div>
  );
};
