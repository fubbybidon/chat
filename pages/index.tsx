import { Flex } from "bumbag";
import React from "react";
import dynamic from "next/dynamic";
const Chat = dynamic(() => import("components/Chat"), { ssr: false });

const index = () => {
  return (
    <Flex flexDirection="column">
      <iframe
        style={{ width: "100vw", height: "100vh", border: "none" }}
        src="https://moscow.rt.ru/"
      ></iframe>
      <Chat />
    </Flex>
  );
};

export default index;
