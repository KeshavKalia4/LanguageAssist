
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Language Assist!</Text>
          <TouchableOpacity style={styles.button} onPress={() => alert('AI Translate clicked')}>
            <Text style={styles.buttonText}>AI Translate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => alert('AI Tutor clicked')}>
            <Text style={styles.buttonText}>AI Tutor</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    width: 200,
    paddingVertical: 15,
    backgroundColor: '#6200ea',
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
