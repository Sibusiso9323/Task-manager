//import liraries
import { View, Text, StyleSheet, black, Dimensions, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import React, { Component, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addTasks, getUserInfo, getCompleteTasksCount, getCompletedTasksCount, getTasks, loggingOut } from '../services';
import { Searchbar, IconButton } from 'react-native-paper';
import { getAdditionalUserInfo } from '@firebase/auth';
import "firebase/firestore";
import { firebase } from '../config/firebaseConfig';
require('firebase/auth')



const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height
// create a component
const Profile = ({ navigation }) => {

    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
    const [taskCItems, setTaskCItems] = useState([]);
    const [taskPItems, setTaskPItems] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const currentUser = firebase.auth().currentUser;


    let list = []

    const fetchTask = async => {
        getTasks().then((data) => {
            list = data
            console.log(list);
            setTaskItems(list)
        })
    }

    const fetchUser = async => {
        getUserInfo().then((data) => {
            list = data
            console.log(list);
            setFirstName(list)
        })
    }

    const fetchCompleteTasksLength = async => {
        getCompleteTasksCount().then((data) => {
            list = data
            console.log(list);
            setTaskCItems(list)
        })
    }
    const fetchINCompleteTasksLength = async => {
        getCompletedTasksCount().then((data) => {
            list = data
            console.log(list);
            setTaskPItems(list)
        })
    }
    console.log(taskCItems);
    console.log(taskPItems);
    console.log(firstName);

    useEffect(() => {
        fetchTask()
        fetchUser()
        fetchCompleteTasksLength()
        fetchINCompleteTasksLength()
    }, [])



    const signOut = () => {
        loggingOut().then(
            navigation.navigate('Welcome')
        )
    }


    return (

        <View style={styles.container}>



            <View style={styles.Inlinebutton}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={30}
                        style={{ color: 'black' }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={signOut}>
                    <MaterialCommunityIcons
                        name="close"
                        size={30}
                        style={{ color: 'black', marginLeft: 10 }} />
                </TouchableOpacity>

            </View>


            <View style={styles.containerInfo}>

                {
                    firstName.map((item, index) => {
                        return (
                            <View key={index} style={styles.usernameCenter}>
                                {/* <TaskView text={item.task} status={'Complete'} /> */}
                                <Text style={styles.username}> {item.firstname}</Text>
                                <Text>{item.email}</Text>
                            </View>
                        )
                    })
                }
                <IconButton
                    icon="email"
                    size={20}
                />

                <View style={styles.inputViewTask}>
                    <Text>Task Completed </Text>
                    <Text>Task In Progress</Text>
                </View>
                <View style={styles.ValueCountTask}>
                    <Text>{taskPItems}</Text>
                    <Text>{taskCItems} </Text>
                </View>
            </View>



            <View style={styles.containerAddTask}>
                <ScrollView style={{ backgroundColor: '#F4F4F4' }}>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <View key={index} style={styles.inputViewTask}>

                                    {/* <TaskView text={item.task} status={'Complete'} /> */}
                                    <Text>   {'\u2B24'}   {item.task}</Text>

                                    <Text>{item.status}</Text>

                                </View>

                            )
                        })
                    }
                </ScrollView>

            </View>


        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'Top',
        alignItems: 'center',
        backgroundColor: 'lime',
    },

    Inlinebutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',

    },


    containerInfo: {
        flex: 1,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBtn: {
        color: 'red',
    },

    Inlinetext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lime',
        marginBottom: 50,
        paddingBottom: 50,
        paddingTop: 100,


    },
    txtEdit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lime',
    },
    ValueCountTask: {
        margin: 5,
        height: 20,
        width: 180,
        borderColor: 'lime',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 30,
    },
    usernameCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputViewTask: {
        margin: 5,
        height: 20,
        width: 240,
        borderColor: 'lime',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },



});


//make this component available to the app
export default Profile;
