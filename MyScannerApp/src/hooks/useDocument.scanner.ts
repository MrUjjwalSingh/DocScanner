import { useCallback, useState } from 'react';
import { Alert, Platform } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';

export function useDocumentScanner() {
  const [scannedImage, setScannedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = useCallback(async () => {
    if (Platform.OS === 'web') {
      Alert.alert('Not supported', 'Document scanning is only available on iOS and Android.');
      return;
    }

    try {
      setIsScanning(true);
      const result = await DocumentScanner.scanDocument({
        maxNumDocuments: 1,
      });

      const firstImage = result?.scannedImages?.[0] ?? null;
      if (firstImage) {
        setScannedImage(firstImage);
      }
    } catch {
      Alert.alert('Scan failed', 'Unable to scan document right now. Please try again.');
    } finally {
      setIsScanning(false);
    }
  }, []);

  return {
    scannedImage,
    isScanning,
    handleScan,
  };
}