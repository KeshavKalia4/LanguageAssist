//Translate
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TranslatorUI = () => {
  const [inputText, setInputText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');

  const handleMicPress = () => {
    console.log('Mic');
  };

  const handleConversationHistory = () => {
    console.log('Conversation History');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.subtitle}>
                Translate text between languages instantly
              </Text>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Type your text here..."
                  placeholderTextColor="#718096"
                  value={inputText}
                  onChangeText={setInputText}
                  multiline
                />
              </View>

              <View style={styles.outputBox}>
                <Text
                  style={
                    translatedText ? styles.outputText : styles.placeholderText
                  }
                >
                  {translatedText || 'Translation will appear here...'}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.conversationButton}
              onPress={handleConversationHistory}
            >
              <Text style={styles.conversationButtonText}>
                Conversation History
              </Text>
            </TouchableOpacity>

            <View style={styles.bottomSection}>
              <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
                <View style={styles.micButtonInner}>
                  <Ionicons name="mic" size={30} color="#fff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default TranslatorUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  boxContainer: {
    flex: 1,
    marginBottom: -20,
  },
  inputBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    height: '45%',
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#333333',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    textAlignVertical: 'top',
  },
  outputBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    height: '45%',
    padding: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#333333',
  },
  outputText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
    lineHeight: 24,
  },
  conversationButton: {
    alignItems: 'center',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: '#6366F1',
  },
  conversationButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bottomSection: {
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  micButton: {
    marginBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  micButtonInner: {
    width: 70,
    height: 70,
    backgroundColor: '#6366F1',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});
