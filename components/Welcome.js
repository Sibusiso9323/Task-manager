//import liraries
import React, { Component } from 'react';
import { View, Text, Linking, Image, useState, TouchableOpacity, StyleSheet } from 'react-native';


// create a component
const Welcome = ({ navigation }) => {
    
    return (
        <View style={styles.container}>

            <Image source={require('../assets/logo.jpg')}  style={styles.logoImg}
            />


            <Text style={styles.txtWelcome}>Welcome</Text>
            <View style={styles.Inlinebutton}
>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.textBtn}>SignUp</Text>
                </TouchableOpacity>
            </View>


            <Text>OR</Text>

            <TouchableOpacity
                style={styles.button2}
                onPress={() => navigation.navigate("Google")}>
                <Text>Google</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}>
                <Text>ForgotPassword</Text>

            </TouchableOpacity>

    
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'lime',
        height: 40,
        width: 100,
        borderColor: 'lime',
        borderWidth:2,
        margin:5,

    },

    button1: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        height: 40,
        width: 100,
        margin:5,
        borderWidth:2,
        borderColor: 'lime',


    },

    button2: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 110,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'red',
        height: 40,
        width: 100,
        margin: 10,
        borderWidth:2,
        textColor: 'white',
    },
    text: {

        color: 'white',
    },
    textBtn: {

        color: 'green',
    },

    Inlinebutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    txtWelcome:{
        fontSize: 20,
        fontWeight: "bold",
        margin:20,
        fontFamily: 'MV Boli',
    },
    logoImg:{
        height:100,
         width:100,
         marginBottom:50,
         borderRadius:75,
    },
});

//make this component available to the app
export default Welcome;
