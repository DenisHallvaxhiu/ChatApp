import "./Background.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001/");

export default function Background({ selected }) {
  Background.propTypes = {
    selected: PropTypes.object,
  };
  const [chatMessage, setChatMessage] = useState([]);
  const [message, setMessage] = useState("");

  const selecteStyle = {
    height: "100vh",
    display: "none",
  };

  const sendMessage = (message) => {
    socket.emit("send_msg", {
      message: message,
    });
  };

  useEffect(() => {
    socket.on("receive_msg", (data) => {
      setChatMessage((chatMessage) => [
        ...chatMessage,
        { message: data.message, sender: false },
      ]);
    });

    return () => {
      socket.off("receive_msg");
    };
  }, [socket]);

  const keyDownEvent = (event) => {
    if (message !== "") {
      console.log("123");
      if (event.key === "Enter") {
        setChatMessage((chatMessage) => [
          ...chatMessage,
          { message: message, sender: true },
        ]);
        sendMessage(message);
        setMessage("");
      }
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const style = selected ? {} : selecteStyle;
  return (
    <div className="background" style={style}>
      <input
        onKeyDown={keyDownEvent}
        onChange={handleChange}
        value={message}
        type="text"
        name=""
        id=""
        placeholder="Write a message"
      />
      {chatMessage.map((context, index) => (
        <div key={index} className={context.sender ? "sender" : "sent"}>
          <p>{context.message}</p>
        </div>
      ))}
    </div>
  );
}
