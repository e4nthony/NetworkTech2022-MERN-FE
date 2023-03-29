import React, { FC, useState } from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    ScrollView, TouchableOpacity,
    Button, Pressable,
    Alert,
} from 'react-native';






/**
 * Chats List (Component)
 * 
 * When logged_in shows the all recent chats and rooms list
 * 
 * @param param0 
 * @returns 
 */
const ChatsList: FC<{ navigation: any }> = ({ navigation }) => {


    const onChatPressCallback = () => {
        console.log("Chat is pressed.");
        navigation.navigate('Chat');
    }
    




    return (
        <ScrollView style={styles.scrollViewStyle}>
            {/* <ChatTittle navigation={1}></ChatTittle>// dev delete */}
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>
            <Message navigation={navigation}></Message>

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
const Message: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={{
            flex: 1
        }}>

                <Text style={styles.chatTittleText}> User Name
                    {/* // { if(can find user name) {
                        //      set user image
                        // }else{
                        //     set default icon require('../assets/man.png')
                        // }} */}
                </Text>


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
        backgroundColor: 'orange',
    },
    chatTittleText: {
        paddingLeft: 12,
        paddingRight: 12,
        margin: 3,
        width: 250,
        // backgroundColor: 'lightyellow',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ChatsList