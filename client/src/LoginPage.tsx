import React from "react";

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
    <form onSubmit={(e) => handleSubmit(e)} className="login-form">
      <h1>Connect</h1>
      <input
        placeholder="Roomname"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      ></input>
      <input
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input type="submit" />
    </form>
  );
};
