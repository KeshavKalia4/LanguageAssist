import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

function Explore() {
  const [flashcards, setFlashcards] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHalf}>
        <Text style={styles.text}>Welcome to Tutor</Text>

        <TouchableOpacity style={styles.button} onPress={() => console.log("hello")}>
          <Text style={styles.buttonText}>AI assistance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("hello")}>
          <Text style={styles.buttonText}>Generate Flashcards</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomHalf}>
        {/* AI Output Box */}
        <View style={styles.outputBox}>
          {flashcards ? (
            <Text style={styles.flashcardsText}>{flashcards}</Text>
          ) : (
            <Text style={styles.flashcardsText}>AI output will appear here.</Text>
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
    backgroundColor: '#f5f5f5',
  },
  topHalf: {
    flex: 1,  // This will take up the first half of the screen
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 70,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10, // Space between buttons
    marginBottom: 70,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bottomHalf: {
    flex: 1,  // This will take up the second half of the screen
    justifyContent: 'flex-start', // Ensures that the output box stays at the top of the bottom half
    alignItems: 'center',
    paddingBottom: 20,  // Padding to avoid overlap with home bar
  },
  outputBox: {
    backgroundColor: '#fff',
    width: '90%',
    height: '70%', // Box takes up most of the bottom half
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  flashcardsText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
