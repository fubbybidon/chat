import React, { useEffect, useRef } from "react";
import {
  Widget,
  addResponseMessage,
  renderCustomComponent,
  setQuickButtons,
  addLinkSnippet
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

function Chat() {
    
  useEffect(() => {
    // socket.current.send()
    renderCustomComponent(() => <div style={{height: '200px'}}>asdasd</div>, {}, true);
    // addLinkSnippet({
    //     title: 'My awesome link',
    //     link: 'https://github.com/Wolox/react-chat-widget/react-chat-widget/react-chat-widget/react-chat-widget/react-chat-widget/react-chat-widget/react-chat-widget',
    //     target: '_blank'
    //   })
    // addResponseMessage(
    //   "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
    // );
    setQuickButtons([
      { label: "Привет", value: "Привет" },
      { label: "Пока", value: "Пока" },
    ]);
  }, []);
  const handleResponse = (newMessage) => {
    socket.current.send(newMessage)
    addResponseMessage(
      newMessage.data
    );
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response);
  };
  const socket = useRef(new WebSocket(process.env.NEXT_PUBLIC_WS_API))
  socket.current.onmessage = handleResponse;
  const handleNewUserMessage = (newMessage) => {
    socket.current.send(newMessage)
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response);
  };



  return (
    <div className="App">
      <Widget
        profileAvatar="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        titleAvatar="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
        handleNewUserMessage={handleNewUserMessage}
        senderPlaceHolder="Задайте свой вопрос"
      />
    </div>
  );
}

export default Chat;
// https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png
