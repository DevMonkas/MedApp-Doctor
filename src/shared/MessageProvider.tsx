import React, {createContext, useContext, useEffect} from 'react';
import {useState} from 'react';
import {IMessage} from 'react-native-gifted-chat';
import {SocketContext} from './SocketProvider';

export const MessageContext = createContext<[any, any]>([[], () => []]);

export const MessageProvider = (props: any) => {
  const [messageObj, setMessageObj] = useState<any>([]);

  return (
    <MessageContext.Provider value={[messageObj, setMessageObj]}>
      {props.children}
    </MessageContext.Provider>
  );
};
