import React, { useRef } from 'react';
import { ScrollView, View, Text, Image, Button, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-gesture-handler';
import Signup from './SignupScreen';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.createTitle}>Login</Text>
            <TextInput 
                placeholder="Username"
                // change placeholder color
                placeholderTextColor="#c0c0c0"
                style={styles.input}
            />
            <TextInput 
                placeholder="Password"
                // change placeholder color
                placeholderTextColor="#c0c0c0"
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.jumpTo("Home")}>
                <Text style={styles.buttonTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.jumpTo("Signup")}>
                <Text style={styles.goToLogin}>Don't have an account yet? Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
          © 2023 Central Studios. All Rights Reserved.
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    createTitle: {
        padding: 20,
        fontSize: 26,
        fontFamily: 'SourceCodePro',
    },
    TextInput:{
        fontSize: 20,
    },
    goToLogin
    : {
        color: '#3e3e3e',
        marginTop: 20,
        fontFamily: 'Roboto',
        fontSize: 18,
    },
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 150,
    },
    logo: {
        width: 300,
        height: 75,
        marginBottom: 20,
    },
    input: {
        color: 'black',
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 0,
        width: 350,
        fontFamily: 'Roboto',
      },
    button: {
        marginTop: 20,
        backgroundColor: '#3e3e3e',
        padding: 10,
        width: 175,
        marginBottom:10,
        borderRadius: 5
    },
    buttonTxt:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    footerText: {
        textAlign: 'center',
        padding: 15,
        marginBottom: 30,
        marginTop: 180,
        fontWeight: '100',
        fontSize: 16
      },
      
})

export default LoginScreen;