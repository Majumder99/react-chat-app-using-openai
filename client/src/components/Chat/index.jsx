import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "test",
    "123456"
  );
  return (
    <>
      <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
          {...chatProps}
          style={{ height: "100vh" }}
          // renderChatHeader={(chat) => <Header chat={chat} />}
        />
      </div>
    </>
  );
};

export default Chat;
