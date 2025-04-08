import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
} from 'react-native';

interface FlashcardData {
    id: string;
    front: string; // Primary Language
    back: string;  // Target Language
    isFlipped: boolean;
}

type GenerationMethod = 'direct' | 'history';

function Flashcards() {
    const [generationMethod, setGenerationMethod] = useState<GenerationMethod>('direct');
    const [topicInput, setTopicInput] = useState('');
    const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);

    // --- Placeholder Logic --- 
    const handleSelectConversation = () => {
        console.log("Select Conversation History - Placeholder");
        // Later: Implement logic to show conversation history modal/screen
    };

    const handleGenerate = () => {
        console.log("Generate Flashcards - Placeholder");
        // Placeholder: Add a few sample cards
        const sampleCards: FlashcardData[] = [
            { id: '1', front: 'Hello', back: 'Hola', isFlipped: false },
            { id: '2', front: 'Goodbye', back: 'Adiós', isFlipped: false },
            { id: '3', front: 'Thank you', back: 'Gracias', isFlipped: false },
        ];
        setFlashcards(sampleCards);
        setTopicInput(''); // Clear input after generation
    };

    const handleFlipCard = useCallback((id: string) => {
        setFlashcards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
            )
        );
    }, []);

    // --- Render Card Component ---
    const renderFlashcard = ({ item }: { item: FlashcardData }) => (
        <TouchableOpacity
            style={styles.flashcard}
            onPress={() => handleFlipCard(item.id)}
            activeOpacity={0.7}
        >
            <Text style={styles.flashcardText}>
                {item.isFlipped ? item.back : item.front}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Generation Method Selection */}
                <View style={styles.methodSelector}>
                    <TouchableOpacity
                        style={[
                            styles.methodButton,
                            generationMethod === 'direct' && styles.methodButtonActive,
                        ]}
                        onPress={() => setGenerationMethod('direct')}
                    >
                        <Text style={styles.methodButtonText}>Direct Input</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.methodButton,
                            generationMethod === 'history' && styles.methodButtonActive,
                        ]}
                        onPress={() => setGenerationMethod('history')}
                    >
                        <Text style={styles.methodButtonText}>From History</Text>
                    </TouchableOpacity>
                </View>

                {/* Conditional Input Area */}
                {generationMethod === 'direct' ? (
                    <TextInput
                        style={styles.input}
                        placeholder="Enter topic (e.g., 'common greetings')"
                        placeholderTextColor="#6B7280"
                        value={topicInput}
                        onChangeText={setTopicInput}
                    />
                ) : (
                    <TouchableOpacity
                        style={styles.selectHistoryButton}
                        onPress={handleSelectConversation}
                    >
                        <Text style={styles.selectHistoryButtonText}>Select Conversation</Text>
                    </TouchableOpacity>
                )}

                {/* Generate Button */}
                <TouchableOpacity style={styles.generateButton} onPress={handleGenerate}>
                    <Text style={styles.generateButtonText}>Generate Flashcards</Text>
                </TouchableOpacity>

                {/* Flashcard Display Area */}
                {flashcards.length > 0 && (
                    <View style={styles.flashcardListContainer}>
                        <Text style={styles.listTitle}>Generated Cards (Tap to flip)</Text>
                        <FlatList
                            data={flashcards}
                            renderItem={renderFlashcard}
                            keyExtractor={(item) => item.id}
                            numColumns={2} // Display cards in two columns
                            columnWrapperStyle={styles.columnWrapper}
                            scrollEnabled={false} // Disable scrolling within FlatList as ScrollView handles it
                        />
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Flashcards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 24,
    },
    methodSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 6,
    },
    methodButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    methodButtonActive: {
        backgroundColor: '#6366F1',
    },
    methodButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#333333',
        marginBottom: 20,
        minHeight: 50,
    },
    selectHistoryButton: {
        backgroundColor: '#1E1E1E',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#333333',
    },
    selectHistoryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    generateButton: {
        backgroundColor: '#4F46E5',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 30,
    },
    generateButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    flashcardListContainer: {
        marginTop: 20,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 16,
        textAlign: 'center',
    },
    flashcard: {
        backgroundColor: '#374151',
        borderRadius: 12,
        padding: 20,
        margin: 8,
        minHeight: 120, // Ensure cards have some height
        flex: 1, // Take up equal space in the column
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    flashcardText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
}); 