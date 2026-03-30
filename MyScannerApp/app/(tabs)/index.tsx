import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// Note the import path from your src folder
import { useDocumentScanner } from '@/src/hooks/useDocument.scanner';

export default function HomeScreen() {
  const { scannedImage, handleScan } = useDocumentScanner();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Document Scanner</Text>
      
      <View style={styles.previewContainer}>
        {scannedImage ? (
          <Image source={{ uri: scannedImage }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No document scanned yet.</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleScan}>
        <Text style={styles.buttonText}>Scan A4 Sheet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  previewContainer: {
    width: '90%',
    height: '60%',
    backgroundColor: '#eee',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: { width: '100%', height: '100%', resizeMode: 'contain' },
  placeholder: { color: '#888' },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});