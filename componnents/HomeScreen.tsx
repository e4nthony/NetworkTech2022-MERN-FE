import React, { FC, useState } from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert,
} from 'react-native';
import AddStudentView from './StudentAddView';



/**
 * Home Screen - Default
 * 
 * @param param0 type navigation
 * @returns View 
 */
const HomeScreen: FC<{ navigation: any }> = ({ navigation }) => {

    const Log_in = () => {
        navigation.navigate('Login');
    }

    const Register = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={{
            flex: 1
        }}>

            <View style={styles.containerMain}>
                <Text style={styles.tittleText}>Home Screen - Logged out</Text>
                <View style={styles.buttonsContainer}>

                    <TouchableOpacity onPress={Log_in} style={styles.button}>

                        <Text style={styles.buttonText}>Log in</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={Register} style={styles.button}>

                        <Text style={styles.buttonText}>Register</Text>

                    </TouchableOpacity>
                </View>



            </View>




            {/* <AddStudentView route={undefined} navigation={undefined}></AddStudentView> */}

            {/* <RequireAuth ></RequireAuth> */}



            {/* //     if (route.name === 'InfoScreen') {
        //         iconName = focused
        //             ? 'information-circle'
        //             : 'information-circle-outline';
        //   } else if (route.name === 'StudentStackCp') {
        //         iconName = focused ? 'list-circle' : 'list-circle-outline';
        //   } */}

        </View>
    );
}

// /**Home Screen - Logged out*/
// const RequireAuth: FC = () => {
//     return (
//         <View style={{
//             flex: 1
//         }}>
//             <Text>Home Screen - Logged out</Text>
//             <View style={styles.buttonsContainer}>

//                 <TouchableOpacity onPress={onCancellCallback} style={styles.button}>

//                     <Text style={styles.buttonText}>Log in</Text>

//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={onCancellCallback} style={styles.button}>

//                     <Text style={styles.buttonText}>Register</Text>

//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

/**Home Screen - Logged in
 * opens chatlist component
*/



const styles = StyleSheet.create({
    /**CONTAINERS */
    containerMain: {
        flex: 1,
        backgroundColor: 'lightgrey',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        margin: 30
        // flexDirection: 'column',
    },
    scrollViewStyle: {

        // flex: 0,
    },
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
    tittleText: {
        // fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
});

export default HomeScreen