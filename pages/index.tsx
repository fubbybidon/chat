import { Flex, Heading, Text } from "bumbag";
import { Spinner } from "bumbag";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const Chat = dynamic(() => import("components/Chat"), { ssr: false });


const index = () => {


  return (
    <Flex flexDirection="column" padding="40px 24px">
      <Flex justifyContent="space-beetwen">
        <Heading use="h3" marginBottom="28px">
          RTK
        </Heading>
      </Flex>
     <Chat />
    
    </Flex>
  );
};

export default index;
