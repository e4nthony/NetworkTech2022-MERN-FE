import React, { FC, useState } from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert,
} from 'react-native';


const onChatPressCallback = () => {
    console.log("Chat is pressed.");
    //todo navigate
}




/**
 * Chats List (Component)
 * 
 * When logged_in shows the all recent chats and rooms list
 * 
 * @param param0 
 * @returns 
 */
const ChatsList: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <ScrollView style={{
            flex: 1
        }}>
            {/* bar make text "My chats" where    */}
            <Text>Home Screen - Logged in</Text>
            <Button
                title="Go to Register screen"
                onPress={() => navigation.navigate('Register', { id: 1 })}
            />
            <Button
                title="Go to Details screen"
                onPress={() => navigation.navigate('Details', { id: 1 })}
            />

        </ScrollView>
    );
}

/**
 * Chat Tittle (Component)
 * 
 * shows name of user , and his image
 * clickable, can redirect to page with actual messages
 * 
 * @param param0 
 * @returns 
 */
const ChatTittle: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={{
            flex: 1
        }}>
            <TouchableOpacity onPress={onChatPressCallback} style={styles.chatTittleContainer}>

                <Image style={styles.avatarImageStyle}
                    source={require('../assets/man.png') // todo: update

                        //{ if(can find user image) {
                        //      set user image
                        // }else{
                        //     set default icon require('../assets/man.png')
                        // }}

                    }></Image>

                <Text style={styles.chatTittleText}> User Name
                    {/* // { if(can find user name) {
                        //      set user image
                        // }else{
                        //     set default icon require('../assets/man.png')
                        // }} */}
                </Text>

            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    /**CONTAINERS */
    containerMain: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chatTittleContainer: {
        flexDirection: 'row',
    },
    avatarImageStyle: {
        flex: 1,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
    },
    scrollViewStyle: {
        flex: 1,
    },
    chatTittleText: {
        paddingLeft: 12,
        paddingRight: 12,
        margin: 3,
        width: 250,
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ChatsList