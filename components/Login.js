//import liraries
import React, { Component, useState } from 'react';
import  { View, Text, Image, Alert,TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {firebase} from '../config/firebaseConfig';
import {signIn} from '../services';
require('firebase/auth') 
// create a component



// create a component
const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        if (!email) {
          alert('Email field is required*.');
        }
    
        if (!password) {
          alert('Password field is required*.');
        }
       
        signIn(email, password).then(() => {
            let user = firebase.auth().currentUser
            if (user) {
                console.log(user)
                navigation.navigate('HomeScreen');
                setEmail('');
                setPassword('');
            }
        });
       
    };
   
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.jpg')}  style={styles.logoImg}  />
            <Text style={styles.txtWelcome} >Welcome back</Text>
            <Text style={{color: 'lime'}} >Sign in to your account:</Text>

            
            <TextInput
                style={styles.formInput1}
                placeholder="Enter your email*"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.formInput2}
                placeholder="Enter your password*"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}  onPress={handlePress}>
                <Text style={styles.buttonText}>Submit</Text>
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
    txtWelcome:{
        fontSize: 20,
        fontWeight: "bold",
        margin:20,
        fontFamily: 'italic',

    },
    logoImg:{
        height:100,
         width:100,
         marginBottom:50,
         borderRadius:75,
    },
   
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: 'lime',
        borderColor: 'lime',
        borderWidth:2,
        margin:5,
        width: 263,

    },

    buttonText: {
        color: 'white',
    },

formInput1:{
    borderColor: 'lime',
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
    margin:5,
   
},

formInput2:{
    borderColor: 'lime',
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
    margin:5,
   
},


});

export default Login;
