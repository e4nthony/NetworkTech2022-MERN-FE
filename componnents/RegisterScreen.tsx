import React, { FC, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert
} from 'react-native';



/**Register Screen */
const RegisterScreen: FC<{ route: any, navigation: any }> = ({ route, navigation }) => {

    const [email, setId] = useState("")
    const [password, setName] = useState("")
    const [avatarUri, setAvatarUri] = useState("")


    const onPressCallback = () => {
        console.log("Button is pressed.");
    }

    const onSaveCallback = async () => {
    }

    const onCancellCallback = () => {
        // navigation.navigate('StudentDetails')
    }


    return (
        <ScrollView style={styles.scrollViewStyle} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.containerMain}>

                <Image style={styles.avatarImageStyle}
                    source={require('../assets/man.png')}></Image>

                <TextInput
                    style={styles.inputField}
                    onChangeText={setId}
                    value={email}
                    placeholder={'Email'}
                />
                <TextInput
                    style={styles.inputField}
                    onChangeText={setName}
                    value={password}
                    placeholder={'Password'}
                />

                {/* <script src="http://accounts.google.com/gsi/client" async defer> </script> */}


                {/* <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View> */}

                <View style={styles.buttonsContainer}>

                    <TouchableOpacity onPress={onCancellCallback} style={styles.button}>

                        <Text style={styles.buttonText}>Cancel</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={onSaveCallback} style={styles.button}>

                        <Text style={styles.buttonText}>Save</Text>

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
        flexDirection: 'row',
        // backgroundColor: 'red',
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


export default RegisterScreen