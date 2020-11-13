import { Button, Flex } from "bumbag";
import React from "react";

interface Props {
  onAgree: () => void;
  onDisagree: () => void;
}

const IsUsefull: React.FC<Props> = (props) => {
  const { onAgree, onDisagree } = props;
  return (
    <Flex
      marginTop="24px"
      marginBottom="24px"
      width="100%"
      textAlign="center"
      padding="0 25px"
      display="flex"
      flexDirection="column"
    >
      Мы ответили на ваш вопрос?
      <Flex marginTop="10px" justifyContent="center">
        <Button marginRight="15px" onClick={onAgree}>
          Да
        </Button>
        <Button onClick={onDisagree}>Нет</Button>
      </Flex>
    </Flex>
  );
};

export default IsUsefull;
