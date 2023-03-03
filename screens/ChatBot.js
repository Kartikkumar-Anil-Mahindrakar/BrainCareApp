import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Dimensions, StyleSheet, Image } from 'react-native';
const { width, height } = Dimensions.get('window');  

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const toggleChat = () => {
    setShowChat(!showChat);
  };
  
  const handleMessage = () => {
    // Convert the input to a lowercase string
    const inputString = input.toLowerCase();
    
    // Check if the input is an arithmetic operation
    if (inputString.includes('+')) {
      // Perform addition
      const [num1, num2] = inputString.split('+').map(parseFloat);
      setOutput(num1 + num2);
    } else if (inputString.includes('-')) {
      // Perform subtraction
      const [num1, num2] = inputString.split('-').map(parseFloat);
      setOutput(num1 - num2);
    } else if (inputString.includes('*')) {
      // Perform multiplication
      const [num1, num2] = inputString.split('*').map(parseFloat);
      setOutput(num1 * num2);
    } else if (inputString.includes('/')) {
      // Perform division
      const [num1, num2] = inputString.split('/').map(parseFloat);
      setOutput(num1 / num2);
    } else {
      // Otherwise, respond with a generic message
      setOutput('I did not understand your input.');
    }
    
    // Clear the input field
    setInput('');
  };
  
  return (
    <View style={{ flex: 1 ,zIndex: 99,backgroundColor:'white'}}>
      {showChat ? (
        // Render your chat interface here
        <View style={{ flex: 1, padding: 16,...styles.floatingCard}}>
          <Text style={{ marginBottom: 16 }}>Type an arithmetic operation (e.g. "2+2"):</Text>
          <TextInput
            value={input}
            onChangeText={setInput}
            style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: 'gray' }}
          />
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={handleMessage} style={{backgroundColor: '#3f51b5',  padding: 8,margin:5,borderRadius: 10 }}>
            <Text style={{ color:'white' }}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleChat} style={{ backgroundColor: '#3f51b5', padding: 8,margin:5,borderRadius: 10 }}>
            <Text style={{ color:'white' }}>Close</Text>
          </TouchableOpacity>
          </View>
          {output ? <Text style={{ marginTop: 16 }}>Result: {output}</Text> : null}
        </View>
      ) : (
        // Render your floating button here
        <TouchableOpacity
          onPress={toggleChat}
          style={{...styles.floatingIcon }}
        >
          <Image source={require('../assets/chatbot_icon.png')}
                style={{width:24,height: 24}}  />
          {/* <Text style={{ color: 'white', fontSize: 24 }}>?</Text> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  floatingIcon: {
    position: 'absolute',
    left:width-100,
    top:height-200,
    width: 60,
    height: 60,
    backgroundColor: '#537FE7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent:'center',
  },
  floatingCard: {
    position: 'absolute',
    left:width-320,
    top:height-400,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth:2,
    alignItems: 'center',
    justifyContent:'center',
  },
});

export default ChatBot;
