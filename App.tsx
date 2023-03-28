import React, { FC, useState } from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddStudentViewfrom from './addStudentView'; //my file

/**Home Screen */
const HomeScreen: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Text>Home Screen</Text>
            <Button
                title="Go to Register screen"
                onPress={() => navigation.navigate('Register')}
            />

        </View>
    );
}

/**Register Screen */
const RegisterScreen: FC = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <AddStudentViewfrom></AddStudentViewfrom>

        </View>
    );
}


const Stack = createNativeStackNavigator();

const App: FC = () => {
    console.log("App started.");

    // const [id, setId] = useState("")


    // const onPressCallback = () => {
    //     console.log("Button is pressed.");
    // }

    // const onSaveCallback = async () => {
    // }

    // const onCancellCallback = () => {
    //     // navigation.goBack()
    // }


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ title: 'Tittle apply to all' }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
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
