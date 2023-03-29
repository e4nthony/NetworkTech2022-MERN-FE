import React, { FC, useState } from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './componnents/HomeScreen';          //my file
import RegisterScreen from './componnents/RegisterScreen';  //my file
import LoginScreen from './componnents/LoginScreen';  //my file

/**STORAGE */
const SaveRefreshToken = async (refreshTokenValue: string, accessTokenValue: string) => {
    try {
      await AsyncStorage.setItem('@refreshToken', refreshTokenValue)
      await AsyncStorage.setItem('@accessToken', accessTokenValue)
    } catch (e) {
      // saving error
    }
  }

const getData = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('@refreshToken')
      const accessToken = await AsyncStorage.getItem('@accessTokenValue')
      if(refreshToken !== null) {
        // value previously stored
      }
      if(accessToken !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  



const DetailsScreen: FC<{ route: any, navigation: any }> = ({ route, navigation }) => {

    const itemId = JSON.stringify(route.params.id)
    const name = JSON.stringify(route.params.name)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>id:{itemId}</Text>
            <Text>{name}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}




const Stack = createNativeStackNavigator();

const App: FC = () => {
    console.log("App started.");
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ title: 'Tittle apply to all' }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};


const styles = StyleSheet.create({
    /**CONTAINERS */
    containerMain: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    scrollViewStyle: {

        // flex: 0,
    },

    /**IMAGES */
    avatarImageStyle: {
        margin: 10,
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField: {
        paddingLeft: 12,
        paddingRight: 12,
        margin: 3,
        // height: 100,
        width: 250,
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        justifyContent: 'center',
    },


    /**BUTTONS */
    button: {
        flex: 0,
        margin: 12,
        padding: 12,
        backgroundColor: 'orange',
        borderRadius: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    /**BOXES */
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
