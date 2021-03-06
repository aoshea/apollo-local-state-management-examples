import { ReactiveVar, gql } from "@apollo/client";

import { Message } from "./models";
import { messageVar } from "./cache";

export const createEditMessage = (messageVar: ReactiveVar<Message>) => {
  return (text: string) => {
    let currentMessage = messageVar();
    
    const newMessage = {
        ...currentMessage,
        text
    };

    messageVar(newMessage);
  }
}

export const messageMutations = {
  editMessage: createEditMessage(messageVar)
}


export const UPDATE_MESSAGE_OUTPUT = gql`
  mutation updateMessageOutput($text: String!) {
    updateMessageOutput(text: $text) @client
  }
`;
