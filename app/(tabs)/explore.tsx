import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

function Explore() {
  const [flashcards, setFlashcards] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.title}>Welcome to Tutor</Text>
        <Text style={styles.subtitle}>Your AI Language Learning Assistant</Text>

        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => console.log("AI")}
        >
          <Text style={styles.buttonText}>AI Assistance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => console.log("Flashcards")}
        >
          <Text style={styles.buttonText}>Generate Flashcards</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomHalf}>
        <View style={styles.outputBox}>
          {flashcards ? (
            <Text style={styles.flashcardsText}>{flashcards}</Text>
          ) : (
            <Text style={styles.placeholderText}>
              Start a conversation with AI to see responses here
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
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
  bottomHalf: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  outputBox: {
    backgroundColor: '#1E1E1E',
    width: '100%',
    height: '85%',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#333333',
  },
  flashcardsText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  placeholderText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 20,
  },
});
