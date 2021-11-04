//import liraries
import React, { Component, useState } from 'react';
import { View, Text,Image,TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeScreenContainer } from '@react-navigation/native';
import { registration } from '../services';

// create a component
const SignUp = ({navigation}) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordconfirm] = useState('');

    const handlePress = () => {
        if (!firstname) {
            alert('Enter your Firtsname*.');
          }
      
            if (!email) {
          alert('Email field is required*.');
        }
    
        if (!password) {
          alert('Password field is required*.');
        }
        if (!passwordconfirm) {
            alert('Password field is required*.');
          }
        if (firstname && email && password && passwordconfirm) {
            registration(email, password, lastname, firstname);
            navigation.navigate("HomeScreen");
            
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setPasswordconfirm('');
        }
};
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.jpg')} style={styles.logoImg} />
            
            <Text style={{color: 'lime'}} >Sign in to your account:</Text>

            <TextInput
                style={styles.formInput1} 
                placeholder="First name*"
                autoCapitalize="none"
                value={firstname}
                onChangeText={(firstname) => setFirstname(firstname)}
            />

            <TextInput
                style={styles.formInput2}
                placeholder="Last name"
                autoCapitalize="none"
                value={lastname}
                onChangeText={(lastname) => setLastname(lastname)}
             
            />

            <TextInput
                style={styles.formInput3}
                placeholder="Enter your email*"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.formInput4}
                placeholder="Enter your password*"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
             <TextInput
                style={styles.formInput5}
                placeholder="Retype your password*"
                value={passwordconfirm}
                onChangeText={(passwordconfirm) => setPasswordconfirm(passwordconfirm)}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.button1}
                onPress={handlePress}>
                <Text style={styles.textBtn}>Sign Up</Text>
            </TouchableOpacity>

            <Text >Already have an account:</Text>
            <TouchableOpacity
                style={styles.button2}
                onPress={handlePress}>
                <Text style={styles.textBtn}>Sign In</Text>
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
        backgroundColor: '#white',
    },
    logoImg:{
        height:100,
         width:100,
         marginBottom:50,
         borderRadius:75,
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
    formInput3:{
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
    
    formInput4:{
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
    formInput5:{
        borderColor: 'lime',
        borderWidth:2,
        alignItems: 'left',
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 12,
        elevation: 3,
        margin:5,
    },
    button1: {
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
    button2: {
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
 
});

//make this component available to the app
export default SignUp;
