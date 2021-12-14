import React, {
  useState,
  useCallback,
  useEffect,
  useContext,
  useRef,
} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bubble, GiftedChat, IMessage, Send} from 'react-native-gifted-chat';
import ChatHead from './ChatHead';
import PrimaryButton from '../../components/atoms/PrimaryButton/PrimaryButton';
import {COLORS} from '../../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import {sendMessage} from '../../services/Chat.service';
import {SocketContext} from '../../shared/SocketProvider';
import {Doctor, Message} from '../../types/ExternalModel.model';
import {AuthContext} from '../../shared/AuthProvider';
import {MessageContext} from '../../shared/MessageProvider';
const Chat = ({navigation, route}: any) => {
  const [messages, setMessages] = useState<any>([]);
  const [userContext, setUser] = useContext(AuthContext);
  const [messageObj, setMessageObj] = useContext(MessageContext);
  const initialRender = useRef(true);
  const soc = useContext(SocketContext);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log('HONEY SINGAAAAA', messageObj);
    if (
      messageObj[0] &&
      messageObj[0]._id.split('_')[0] === route?.params.userPhone
    ) {
      setMessages((previousMessages: any) =>
        GiftedChat.append(previousMessages, messageObj),
      );
    }
  }, [messageObj]);

  const onSend = useCallback((message = []) => {
    console.log('chal ja bhai', message);
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, message),
    );
    console.log('MASSAGES', messages);
  }, []);

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.primary[400],
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const renderSend = (sendProps: any) => {
    const {text, messageIdGenerator, user, onSend} = sendProps;
    return (
      <TouchableOpacity
        onPress={() => {
          if (text && onSend) {
            sendMessage(
              soc,
              userContext.selectedPhone?.toString()!,
              userContext.phone!,
              text,
            );
            onSend(
              {text: text.trim(), user: user, _id: messages.length + 1},
              true,
            );
          }
        }}
        style={{
          height: '100%',
          width: '10%',
          justifyContent: 'center',
        }}>
        <Feather name="send" size={28} color={COLORS.primary[500]} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* <ChatHead userName={route.params?.userName} img={route.params?.img} /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container} //this value is depends upon your view/component height
      >
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          scrollToBottom
          messagesContainerStyle={{backgroundColor: 'white'}}
          renderSend={renderSend}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default Chat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 2,
    width: '100%',
    backgroundColor: 'white',
    marginHorizontal: 'auto',
  },
});
