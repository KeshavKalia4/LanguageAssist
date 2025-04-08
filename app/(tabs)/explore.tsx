import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

function Explore() {
  const [primaryLang, setPrimaryLang] = useState("Not Selected");
  const [targetLang, setTargetLang] = useState("Not Selected");

  const handlePrimarySelect = () => {
    // For now, we'll set it to a predefined value for simplicity
    setPrimaryLang("English");
  };

  const handleTargetSelect = () => {
    // For now, we'll set it to a predefined value for simplicity
    setTargetLang("Spanish");
  };

  const handleAIAssistance = () => {
    router.push('/Assistant');
  };

  const handleFlashcards = () => {
    router.push('/Flashcards');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.title}>Welcome to Tutor</Text>
        <Text style={styles.subtitle}>Your AI Language Learning Assistant</Text>
      </View>

      <View style={styles.languageSelection}>
        {/* Primary Language Selection */}
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handlePrimarySelect}
        >
          <Text style={styles.buttonText}>Select Primary Language</Text>
        </TouchableOpacity>

        <Text style={styles.selectedLangText}>
          Primary Language: {primaryLang || "Not selected"}
        </Text>

        {/* Target Language Selection */}
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleTargetSelect}
        >
          <Text style={styles.buttonText}>Select Target Language</Text>
        </TouchableOpacity>

        <Text style={styles.selectedLangText}>
          Target Language: {targetLang || "Not selected"}
        </Text>
      </View>

      {/* AI/Flashcard buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handleAIAssistance}
        >
          <Text style={styles.buttonText}>AI Assistance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleFlashcards}
        >
          <Text style={styles.buttonText}>Generate Flashcards</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'flex-start', // Align from the top
    paddingTop: 20, // Space from the top
  },
  topHalf: {
    alignItems: 'center',
    marginBottom: 40, // Space between the title/subtitle and the language selection section
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 20, // Space between subtitle and language selection
    paddingBottom: 30,
    textAlign: 'center',
  },
  languageSelection: {
    alignItems: 'center',
    marginBottom: 40, // Space between language selection and action buttons
  },
  selectedLangText: {
    fontSize: 16,
    color: '#9CA3AF',
    marginVertical: 8,
  },
  button: {
    alignItems: 'center',
    width: '85%',
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: '#6366F1',
  },
  secondaryButton: {
    backgroundColor: '#4F46E5',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  actionButtons: {
    alignItems: 'center',
    marginBottom: 24, // Space below the action buttons
    paddingTop: 50,
  },
});
