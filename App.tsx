import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  console.log("App started.");

  const onPressCallback = () => {
    console.log("Button is pressed.");
  }

  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    height: 100,
    width: 100,
    flex: 1,
    backgroundColor: '#001',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    height: 100,
    width: 100,
    flex: 1,
    backgroundColor: '#009',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    height: 100,
    width: 100,
    flex: 1,
    backgroundColor: '#020',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App
