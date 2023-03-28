import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet, Text, TextInput, View, Image
} from 'react-native';

const App = () => {
  console.log("App started.");

  const [id, setId] = useState("");

  const onPressCallback = () => {
    console.log("Button is pressed.");
  }

  return (
    <View style={styles.containerMain}>
      <Image style={styles.avatarImageStyle}
        source={require('./assets/man.png')}></Image>

      <TextInput
        style={styles.inputField}
        onChangeText={setId}
        value={id}
        placeholder={'Student ID'}
      >
      </TextInput>
      {/* <TextInput
        style={styles.inputField}
        
      >
      </TextInput> */}

      {/* <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View> */}
    </View >
  );
}

const styles = StyleSheet.create({
  containerMain: {
    // marginTop: 20 ,
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'lightgrey',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  avatarImageStyle: {
    margin: 10 ,
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    // height: 100,
    width: 100,
    backgroundColor: 'green',
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
