import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import Header from "../CustomHeader/index";
import StandardMessageForm from "../CustomMessageForms/StandardMessageForm";

// if using vite then we will say import.meta.env
const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "sourav",
    "123456"
  );
  return (
    <>
      <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        {/* We can customize the chat window  */}
        <MultiChatWindow
          {...chatProps}
          style={{ height: "100vh" }}
          renderChatHeader={(chat) => <Header chat={chat} />}
          renderMessageForm={(props) => {
            // if (chatProps.chat?.title.startsWith("AiChat_")) {
            //   return <Ai props={props} activeChat={chatProps.chat} />;
            // }
            // if (chatProps.chat?.title.startsWith("AiCode_")) {
            //   return <AiCode props={props} activeChat={chatProps.chat} />;
            // }
            // if (chatProps.chat?.title.startsWith("AiAssist_")) {
            //   return <AiAssist props={props} activeChat={chatProps.chat} />;
            // }

            return (
              <StandardMessageForm props={props} activeChat={chatProps.chat} />
            );
          }}
        />
      </div>
    </>
  );
};

export default Chat;
