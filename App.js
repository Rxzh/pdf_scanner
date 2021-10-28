import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import DocumentScanner from 'react-native-document-scanner';

function App (){
  return (
    <View>
    <DocumentScanner
      //style={styles.scanner}
      //onPictureTaken={handleOnPictureTaken}
      overlayColor="rgba(255,130,0, 0.7)"
      enableTorch={false}
      quality={0.5}
      detectionCountBeforeCapture={5}
      detectionRefreshRateInMS={50}
    />
  </View>
  );
};


export default App;
