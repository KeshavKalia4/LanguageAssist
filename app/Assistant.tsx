import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // Import Axios

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

function Assistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  // Function to fetch AI response from backend
  const fetchAIResponse = async (userQuestion: string) => {
    try {
      // Make POST request to your backend API
      const response = await axios.post('http://192.168.1.8:5001/api/get_answer', {
        question: userQuestion,
      });
      return response.data.answer; // Assuming your backend sends back the AI answer
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return 'Sorry, there was an error processing your request.';
    }
  };

  const handleSend = useCallback(async () => {
    if (inputText.trim().length === 0) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
    };

    // Placeholder for AI message
    const aiPlaceholder: Message = {
      id: (Date.now() + 1).toString(),
      text: 'AI is thinking...',
      sender: 'ai',
    };

    // Add user message and placeholder AI response to the beginning for inverted list
    setMessages((prevMessages) => [
      aiPlaceholder,
      userMessage,
      ...prevMessages,
    ]);
    setInputText('');

    // Fetch AI response after sending the user message
    const aiResponse = await fetchAIResponse(inputText.trim());

    // Update AI message after getting response from backend
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[0] = {
        id: (Date.now() + 2).toString(),
        text: aiResponse,
        sender: 'ai',
      };
      return updatedMessages;
    });
  }, [inputText]);

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === 'user' ? styles.userMessage : styles.aiMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0} // Adjust offset as needed
      >
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          style={styles.messageList}
          contentContainerStyle={styles.messageListContent}
          inverted // Shows latest messages at the bottom
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask your AI assistant..."
            placeholderTextColor="#6B7280"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Assistant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  keyboardView: {
    flex: 1,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageListContent: {
    paddingVertical: 16,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 18,
    marginBottom: 12,
  },
  userMessage: {
    backgroundColor: '#6366F1',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  aiMessage: {
    backgroundColor: '#374151', // Darker gray for AI
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    backgroundColor: '#1E1E1E',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    backgroundColor: '#374151',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#fff',
    marginRight: 12,
  },
  sendButton: {
    backgroundColor: '#6366F1',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
