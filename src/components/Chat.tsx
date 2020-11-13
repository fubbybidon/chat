import { styled } from "bumbag";
import React, { useEffect, useRef, useState } from "react";
import {
  Widget,
  addResponseMessage,
  renderCustomComponent,
  setQuickButtons,
  addLinkSnippet,
  toggleMsgLoader,
} from "react-chat-widget";
import { WSResponse, Answer, Question, Fallback } from "typings";

import "react-chat-widget/lib/styles.css";
import IsUsefull from "./IsUsefull";

const Wrapper = styled.div`
  .rcw-header {
    background-color: ${({ theme }) => theme.rtk.primary};
    padding: 0;

    span {
      display: none;
    }
  }
  .rcw-title {
    font-size: 15px;
  }
  .rcw-message {
    padding-bottom: 15px;
  }
  .rcw-messages-container {
    padding-bottom: 8px;
  }
  .rcw-snippet-details {
    border-left-color: #e4e4e4;
  }
  .rcw-client .rcw-message-text {
    padding: 8px 12px;
    background-color: #e0e0e0;
  }
  .rcw-message-text {
    padding: 4px;
    line-height: 1.4;
  }
  .rcw-launcher {
    background-color: ${({ theme }) => theme.rtk.primary};
  }

  .rcw-badge {
    background-color: ${({ theme }) => theme.rtk.secondary};
  }

  input::-webkit-input-placeholder {
    font-size: 16px;
  }
`;

function Chat() {
  const counter = useRef(0);
  const socket = useRef<WebSocket | null>();
  useEffect(() => {
    addResponseMessage("Добро пожаловать! Задайте интересующий вас вопрос");
    socket.current = new WebSocket(process.env.NEXT_PUBLIC_WS_API);
    socket.current.onmessage = handleResponse;
  }, []);
/* ____________________________________________________HANDLE NEW MESSAGE_________________________________________________________________*/
  const handleNewUserMessage = (newMessage) => {
    counter.current++;
    const question: Question = {
      id: counter.current,
      text: newMessage,
    };

    socket.current.send(JSON.stringify(question));
  };

  const handleCallOperator = (id: number) => {
    const question: Fallback = {
      id: id,
    };
    socket.current.send(JSON.stringify(question));
  };
/* ____________________________________________________HANDLE RESPONSE_________________________________________________________________*/

  const handleResponse = (response: WSResponse) => {
    console.log(response);
    // TODO: Заменить data на response.data
    const data: WSResponse["data"] = {
      id: 1,
      text:
        "Для того чтобы подключить домашний интернет, необходимо подключить интернет",
      links: [
        {
          title: "Чудесная ссылка от всех бед",
          link:
            "https://moscow.rt.ru/support/internet/contract/state-of-account",
        },
        {
          title: "Чудесная ссылка от всех бед",
          link:
            "https://moscow.rt.ru/support/internet/contract/state-of-account",
        },
        {
          title: "Чудесная ссылка от всех бед",
          link:
            "https://moscow.rt.ru/support/internet/contract/state-of-account",
        },
      ],
    };
    // handle error
    if (data.code) {
      addResponseMessage(
        "На сайте ведутся работы, функционал чат ботов временно недоступен."
      );
      return null;
    }
    // render text message
    addResponseMessage(data.text);
    if (data.links.length) {
      addLinkSnippet({
        title: data.links[0].title,
        link: data.links[0].link,
        target: "_blank",
      });
    }
    // render question
    renderCustomComponent(IsUsefull, {
      onAgree: () => {
        addResponseMessage("Здорово, обращайтесь еще!");
      },
      onDisagree: () => {
        handleCallOperator(data.id);
        addResponseMessage("Соединяю с оператором.");
      },
    });
  };

  return (
    <Wrapper className="App">
      <Widget
        showTimeStamp={false}
        profileAvatar="https://avatars.dicebear.com/api/avataaars/2345678.svg"
        handleNewUserMessage={handleNewUserMessage}
        senderPlaceHolder="Задайте свой вопрос"
        title="Чат со специалистом"
      />
    </Wrapper>
  );
}

export default Chat;
