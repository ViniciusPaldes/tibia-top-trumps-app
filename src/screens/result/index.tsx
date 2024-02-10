// screens/ResultScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';

function ResultScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Result Screen</Text>
      <Button title="Go back to Main" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ResultScreen;
