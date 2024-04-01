// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Button, FlatList, StyleSheet, Image, Text, } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// import Tts from 'react-native-tts';//npm install --save react-native-tts
// import IMAGES from '../../assets/images';
//                                     //react-native link react-native-tts

// // const SpeechRecognition =
// //   window.SpeechRecognition || window.webkitSpeechRecognition;
// // // const recognition = new SpeechRecognition();
// // const speakAnswer = new window.SpeechSynthesisUtterance();

// const MicroScreen = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [socket, setSocket] = useState(null);
//   const [showAlert, setShowAlert] = useState(true);

  
//   useEffect(() => {
//     const ws = new WebSocket("ws://192.168.1.20:8080");
//     // Establish WebSocket connection
//     setSocket(ws);

//     ws.onopen = () => {
//       console.log("WebSocket connection opened");
//     };

//     ws.onclose = (event) => {
//       console.log("WebSocket connection closed", event);
//     };

//     ws.onerror = (error) => {
//       console.error("WebSocket error", error);
//     };

//     return () => {
//       if (ws.readyState !== ws.CLOSED) {
//         ws.close();
//       }
//     };
//   }, []);

//   function wsService(messageUser){
//     if (socket) {
//       socket.onmessage = async (event) => {
//         const data = JSON.parse(event.data);
//         var answerMessage = data.message[0];
//         var language = data.message[1];
//         if (language === "vi") Tts.setDefaultLanguage('vi-VN');
//         else if (language === "en") Tts.setDefaultLanguage('en-US');
//         Tts.speak(answerMessage);

//         console.log(messageUser) 
//         const newMessage = {
//           id: messages.length.toString(), // Change from message.length to messages.length
//           text: messageUser,
//           ans: answerMessage,
//           timestamp: Date.now(),
//         };

//         setMessages([newMessage, ...messages]); // Change from message to messages
        
//         try {
//           await AsyncStorage.setItem('messages', JSON.stringify([newMessage, ...messages])); // Change from message to messages
//         } catch (error) {
//           console.error('Error storing message:', error);
//         }
//       };
//     }
//   }

//   useEffect(() => {
//     const retrieveMessages = async () => {
//       try {
//         const storedMessages = await AsyncStorage.getItem('messages');
//         if (storedMessages) {
//           setMessages(JSON.parse(storedMessages));
//         }
//       } catch (error) {
//         console.error('Error retrieving messages:', error);
//       }
//     };
//     retrieveMessages();
//   }, []);

//   const sendMessage = async () => {
//     const trimmedMessage = message.trim();
//     if (trimmedMessage === '') {
//       alert('Vui lòng nhập tin nhắn');
//       return;
//     }

//     if (trimmedMessage.length > 255) {
//       alert('Tin nhắn không được dài quá 255 ký tự');
//       return;
//     }

//     const requestMessage = {
//       text: trimmedMessage
//     }

//     if (socket) {
//       socket.send(JSON.stringify(requestMessage));
//       console.log(JSON.stringify(requestMessage));
//     } else {
//       console.error("WebSocket connection is not open");
//     }
    
//     setMessage('');

//     wsService(trimmedMessage)
//   };

//   const clearMessages = async () => {
//     try {
//       setMessages([]);
//       setAnswers([]);
//       await AsyncStorage.removeItem('messages');
//     } catch (error) {
//       console.error('Error clearing messages:', error);
//     }
//   };

//   const voiceMessages = async () => {
//     // try {
//     //   setMessages([]);
//     //   setAnswers([]);
//     //   await AsyncStorage.removeItem('messages');
//     // } catch (error) {
//     //   console.error('Error clearing messages:', error);
//     // }
//     alert('Tôi nghe đây...');
    

//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowAlert(false);
//     }, 3000); // Close alert after 3 seconds

//     return () => clearTimeout(timeout); // Cleanup on component unmount
//   }, []);
  

//   const renderItem = ({ item}) => (
//     <View>
//         <View style={styles.messageContainer}>
//           <Text style={styles.messageText}>{item.text}</Text>
//           <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
//         </View>
//         <View style={styles.answerContainer}>
//           <Text style={styles.messageText}>{item.ans}</Text>
//           <Text style={styles.timestamp}>{new Date(item.timestamp).toLocaleString()}</Text>
//         </View>
//     </View>
//   );
  

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         inverted
//         contentContainerStyle={styles.listContainer}
//       />
//       {/* <FlatList
//         data={answers}
//         renderItem={answerItem}
//         keyExtractor={item => item.id}
//         inverted
//         contentContainerStyle={styles.listContainer}
//       /> */}
//       <View style={styles.inputContainer}>
//         <TouchableOpacity onPress={voiceMessages}>
//         <Image source={IMAGES.MICRO} style={styles.micro} />
//         </TouchableOpacity>
     
//         <TextInput
//           style={styles.input}
//           value={message}
//           onChangeText={text => setMessage(text)}
//           placeholder="Nhập tin nhắn..."
//           onSubmitEditing={sendMessage}
//           autoFocus={true}
//         />
//         <Button title="Gửi" onPress={sendMessage} />
//       </View>
//       <TouchableOpacity onPress={clearMessages}>
//         <Text style={styles.clearButton}>Xóa tin nhắn</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     marginBottom: 100,
//   },
//   messageContainer: {
//     backgroundColor: '#76d7c4',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//     maxWidth: '70%',
//     alignSelf: 'flex-end'
//   },
//   answerContainer: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//     maxWidth: '70%',
//     alignSelf: 'flex-start',
//   },
//   micro: { width: 30, height: 30 },
//   messageText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   timestamp: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     marginRight: 5,
//     marginLeft: 10,
//     backgroundColor: '#fff',
//   },
//   clearButton: {
//     color: 'red',
//     textAlign: 'center',
//     marginTop: 10,
//   },
// });

// export default MicroScreen;
import { View, Text } from 'react-native'
import React from 'react'

const AIScreen = () => {
  return (
    <View>
      <Text>AIScreen</Text>
    </View>
  )
}

export default AIScreen