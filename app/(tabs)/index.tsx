import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TranslatorUI = () => {
  const [inputText, setInputText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');

  const handleMicPress = () => {
    // Placeholder logic for mic press
    console.log('Mic');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Welcome Text */}
      <Text style={styles.title}>Welcome to the Translator</Text>

      {/* Input Box */}
      <TextInput
        style={styles.inputBox}
        placeholder="Type your text here..."
        value={inputText}
        onChangeText={setInputText}
      />

      {/* Output Box */}
      <View style={styles.outputBox}>
        <Text style={styles.outputText}>
          {translatedText || 'Translation will appear here...'}
        </Text>
      </View>

      {/* Mic Button */}
      <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
        <Ionicons name="mic" size={30} color="#fff" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TranslatorUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 70,
    marginBottom: 30,
  },
  inputBox: {
    width: '100%',
    height: 250,  // Increased height
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  outputBox: {
    width: '100%',
    height: 250,  // Increased height
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  outputText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  micButton: {
    position: 'absolute',
    bottom: 100, // Adjusted to prevent overlap with tab bar
    right: 175, // Positioned towards the right side
    width: 60,
    height: 60,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});