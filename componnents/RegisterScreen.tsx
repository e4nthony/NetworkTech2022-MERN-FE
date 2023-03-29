import React, { FC, useState, useEffect, useRef } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert
} from 'react-native';

import UserModel, { UserLoginInfo, UserPreviewInfo, UserRegInfo } from "../model/UserModel"

import IconContext, { CiCamera } from "react-icons/ci";


// const loadScript = (src) =>
//     new Promise((resolve, reject) => {
//         if (document.querySelector(`script[src="${src}"]`)) return resolve()
//         const script = document.createElement('script')
//         script.src = src
//         script.onload = () => resolve()
//         script.onerror = (err) => reject(err)
//         document.body.appendChild(script)
//     })

/**Register Screen */
const RegisterScreen: FC<{ route: any, navigation: any }> = ({ route, navigation }) => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setimageUrl] = useState("")

    // const googleButton = useRef(null);

    // useEffect(() => {
    //     const src = 'https://accounts.google.com/gsi/client';

    //     const id = ""

    //     loadScript(src)
    //       .then(() => {
    //         /*global google*/
    //         console.log(google);

    //         google.accounts.id.initialize({
    //           client_id: id,
    //           callback: handleCredentialResponse,
    //         });

    //         google.accounts.id.renderButton(
    //           googleButton.current, 
    //           { theme: 'outline', size: 'large' } 
    //         );

    //       }).catch(console.error);

    //     return () => {
    //       const scriptTag = document.querySelector(`script[src="${src}"]`)
    //       if (scriptTag) document.body.removeChild(scriptTag)
    //     }
    //   }, [])

    const onRegisterCallback = async () => {
        const user: UserRegInfo = {
            email: email,
            name: name,
            password: password,
            imageUrl: '' //"url" todo
        };
        try {
            // if (avatarUri != "") {
            //     console.log("uploading image")
            //     const url = await StudentModel.uploadImage(avatarUri)
            //     student.image = url
            //     console.log("got url from upload: " + url)
            // }
            // console.log("saving user")
            await UserModel.register(user);
        } catch (err) {
            console.log("fail adding user: " + err);
        }
        navigation.goBack();
    }

    const onCancellCallback = () => {
        navigation.goBack();
    }

    const onImageUploadCallback = () => {
        //
    }

    return (
        <ScrollView style={styles.scrollViewStyle} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.containerMain}>

                <View>
                    <Image style={styles.avatarImageStyle}
                        source={require('../assets/man.png')}></Image>

                    {/* todo upload image button */}
                    <TouchableOpacity onPress={onImageUploadCallback} style={styles.imageButton}>
                        {/* <Text style={{ flex: .8 }}>Upload</Text> */}
                        <Image source={require('../assets/camera.png')} resizeMode='contain' style={{ flex: 1 }} />
                        

                        {/* <Text style={styles.buttonText} >Upload</Text> */}

                    </TouchableOpacity>
                </View>




                <TextInput
                    style={styles.inputField}
                    onChangeText={setName}
                    value={name}
                    placeholder={'Name'}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={setEmail}
                    value={email}
                    placeholder={'Email'}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={setPassword}
                    value={password}
                    placeholder={'Password'}
                />

                {/* <script src="http://accounts.google.com/gsi/client" async defer> </script> */}


                {/* <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View> */}

                <View style={styles.buttonsContainer}>

                    <TouchableOpacity onPress={onRegisterCallback} style={styles.registerButton}>

                        <Text style={styles.buttonText}>Register</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={onSaveCallback}
                        style={styles.registerButton}>

                        <Text style={styles.buttonText}>GOOGLE</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={onCancellCallback} style={styles.cancelButton}>

                        <Text style={styles.buttonText} >Cancel</Text>

                    </TouchableOpacity>



                    {/* startIcon={<DeleteIcon /> */}

                    {/* <Button variant="outlined">
            Delete
          </Button> */}

                    {/* <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}

          /> */}

                    {/* <Pressable
            style={styles.button}
            // onPress={onPress}
            >

            <Text style={styles.button}>{}</Text>

          </Pressable> */}
                </View>
            </View >

        </ScrollView>

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
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        top: 50,
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
    registerButton: {
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
    imageButton: {
        aspectRatio: 1,
        width: 65,
        margin: 0,
        padding: 12,
        backgroundColor: 'orange',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        right: -125,
        top: -15,

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


export default RegisterScreen