import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";

const StandardMessageForm = ({ props, activeChat }) => {
  console.log(
    "🚀 ~ file: StandardMessageForm.jsx:5 ~ StandardMessageForm ~ activeChat:",
    activeChat
  );
  console.log(
    "🚀 ~ file: StandardMessageForm.jsx:5 ~ StandardMessageForm ~ props:",
    props
  );
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

    console.log("new date:", date);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    setMessage("");
    setAttachment("");
  };

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default StandardMessageForm;
