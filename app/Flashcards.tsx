import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from "react";

function Flashcards() {
    //State for either direct input or from history
    const [selected, setSelected] = useState('A')

    //state for the flashcards
    const [flashcards, setFlashcards] = useState([])


    return (
        <>
            {/* Option buttons */}
            <View style={styles.optionButtonContainer}>

                {/* Direct Input */}
                <TouchableOpacity
                    onPress={() => setSelected('A')}
                    style={[
                        styles.optionButton,
                        selected === 'A' && styles.selectedOption
                    ]}
                >
                    <Text style={styles.buttonText}>
                        Direct Input
                    </Text>
                </TouchableOpacity>

                {/* From History */}
                <TouchableOpacity
                    onPress={() => setSelected('B')}
                    style={[
                        styles.optionButton,
                        selected === 'B' && styles.selectedOption
                    ]}
                >
                    <Text style={styles.buttonText}>
                        From History
                    </Text>
                </TouchableOpacity>
            </View>


            {/* Flashcard work */}
            <View style={styles.container} >
                {/* User input topics */}
                <TextInput
                    style={styles.inputButton}
                    placeholder="Enter topic (e.g., 'common greetings')"
                />

                {/* Generate Flashcards */}
                <TouchableOpacity style={styles.button}
                    onPress={() => setFlashcards([
                        { front: 'Hello', back: 'Hola', flipped: false },
                        { front: 'Thank you', back: 'Gracias', flipped: false },
                        { front: 'Goodbye', back: 'Adiós', flipped: false },
                        { front: 'Goodbye', back: 'Adiós', flipped: false },
                        { front: 'Goodbye', back: 'Adiós', flipped: false },
                        { front: 'Goodbye', back: 'Adiós', flipped: false },
                        { front: 'Goodbye', back: 'adios', flipped: false },
                        { front: 'Goodbye', back: 'Adiós', flipped: false },
                    ])}
                >
                    <Text style={styles.buttonText}>Generate Flashcards</Text>
                </TouchableOpacity>

                <ScrollView style={{ marginTop: 20, maxHeight: 400 }} contentContainerStyle={{ paddingBottom: 20 }}>
                    {/* Click generate flashcards, these appear */}
                    {flashcards.map((card, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                const updated = [...flashcards];
                                updated[index].flipped = !updated[index].flipped;
                                setFlashcards(updated);
                            }}
                            style={styles.card}
                        >
                            <Text style={styles.cardText}>
                                {card.flipped ? card.back : card.front}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </>
    )


}



export default Flashcards;

const styles = StyleSheet.create({
    optionButtonContainer: {
        flexDirection: 'row',
        backgroundColor: 'black', // dark gray background
        borderRadius: 10,
        padding: 4,
        marginHorizontal: 20,
        marginTop: 20,
        alignSelf: 'center',
    },
    optionButton: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedOption: {
        backgroundColor: '#7b61ff', // purple highlight
    },
    selectedText: {
        color: 'white',
        fontWeight: 'bold',
    },
    unselectedText: {
        color: '#aaa', // faded text for unselected
        fontWeight: '500',
    },
    topHalf: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
        paddingTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start', // Align from the top
        paddingTop: 20, // Space from the top
    },
    button: {
        alignItems: 'center',
        width: '95%',
        padding: 16,
        borderRadius: 12,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: '#4F46E5',
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    inputButton: {
        alignItems: 'center',
        width: '95%',
        padding: 16,
        borderRadius: 12,
        marginVertical: 10,
        marginLeft: 10,
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: '#007AFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        color: 'white',
    },
    card: {
        backgroundColor: '#1e1e1e',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },

    cardText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },

});