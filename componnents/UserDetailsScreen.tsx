import React, { FC, useState, useEffect, useRef } from 'react';

import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert
} from 'react-native';

import UserModel, { UserData, UserLoginInfo, UserPreviewInfo, UserRegInfo } from "../model/UserModel"


/**User Details Screen */
const LoginScreen: FC<{ route: any, navigation: any }> = ({ route, navigation }) => {


    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setimageUrl] = useState("")
    const [dev_refreshToken, setRT] = useState("")
    const [dev_accessToken, setAT] = useState("")

    const onOkCallback = async () => {

        const user: UserLoginInfo = {
            email: email,
            password: password,
        };

        try {
            // if (avatarUri != "") {
            //     console.log("uploading image")
            //     const url = await StudentModel.uploadImage(avatarUri)
            //     student.image = url
            //     console.log("got url from upload: " + url)
            // }
            // console.log("saving user")
            let tokens = await UserModel.login(user);
        } catch (err) {
            console.log("fail adding user: " + err);
        }
        navigation.goBack();
    }

    const onCancellCallback = () => {
        navigation.goBack();
    }


    return (
        <ScrollView style={styles.scrollViewStyle} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.containerMain}>

                <View>
                    <Image style={styles.avatarImageStyle}
                        source={require('../assets/man.png')}></Image>
                </View>

                <View style={styles.pair} >
                    <Text style={styles.txtText}>Id</Text>
                    <TextInput
                        style={styles.inputField}
                        value={id}
                        placeholder={'Id'}
                    />
                </View>
                <View style={styles.pair} >
                    <Text style={styles.txtText}>Email</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setPassword}
                        value={email}
                        placeholder={'Email'}
                    />
                </View>
                <View style={styles.pair} >
                    <Text style={styles.txtText}>Name</Text>
                    <TextInput
                        style={styles.inputField}
                        value={name}
                        placeholder={'Name'}
                    />
                </View >
                <View style={styles.pair} >
                    <Text style={styles.txtText}>Password</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setPassword}
                        value={password}
                        placeholder={'Password'}
                    />
                </View >
                <View style={styles.pair} >
                    <Text style={styles.txtText}>dev refreshToken</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setRT}
                        value={dev_refreshToken}
                        placeholder={'dev refreshToken'}
                    />
                </View >
                <View style={styles.pair} >
                    <Text style={styles.txtText}>dev accessToken</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={setAT}
                        value={dev_accessToken}
                        placeholder={'dev accessToken'}
                    />
                </View >







                <View style={styles.buttonsContainer}>

                    <TouchableOpacity onPress={onOkCallback} style={styles.cancelButton}>

                        <Text style={styles.buttonText} >Back</Text>

                    </TouchableOpacity>

                </View>
            </View >
        </ScrollView >
    )
};

const styles = StyleSheet.create({
    /**CONTAINERS */
    containerMain: {
        // marginTop: 20 ,
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        // flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // container: {
    //   flex: 1,
    //   backgroundColor: 'lightgrey',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    scrollViewStyle: {

        flexGrow: 1,
    },

    /**IMAGES */
    avatarImageStyle: {
        margin: 10,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
    },
    inputField: {
        paddingLeft: 12,
        paddingRight: 12,
        margin: 3,
        // height: 100,
        width: 150,
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pair: {
        width: 250,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    /**BUTTONS */
    LoginButton: {
        width: 140,
        margin: 12,
        padding: 12,
        backgroundColor: 'orange',
        borderRadius: 10,
        fontSize: 10
    },
    cancelButton: {
        width: 100,
        marginTop: 50,
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
    txtText: {
        textAlign: 'center',
        color: 'black',
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


export default LoginScreen