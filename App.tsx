import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckInternet from './src/screen/CheckInternet/CheckInternet';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <View style={styles.container}>
      {isConnected ? (
        <Text>Connected: Text to show when connected</Text>
      ) : (
        <CheckInternet isConnected={isConnected} setIsConnected={setIsConnected} />
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
