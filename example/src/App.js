import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ProgressBar from 'react-native-number-progress';

export default function App() {

  return (
    <View style={styles.container}> 
      <Text style={{marginBottom:20}}>Progress Bar:</Text>
      <ProgressBar size={6} progress={3}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center'
  }
  
});
