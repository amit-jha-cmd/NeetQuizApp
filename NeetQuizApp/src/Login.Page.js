import React from 'react';
import { SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    ScrollView, 
    View, Text, Image } from 'react-native';
import SubCard from './SubCard.component';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from './icons/icon512.png';

const LoginPage = ({navigation}) => {
    return(
        <SafeAreaView  style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor={'#212b46'}/>
            <View style={styles.form}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo}/>
                </View>
                <Text style={styles.footer}>Made With  <Icon name='heart'
                    size={15}
                    color='red'
                />  In India</Text>
                <Input
                placeholderTextColor={"white"}
                dataDetectorTypes={'address'}
                inputStyle={styles.input}
                placeholder='Email'
                leftIcon={
                    <Icon
                    name='user'
                    size={30}
                    color='white'
                    />
                }
                />

                <Input
                placeholderTextColor={"white"}
                inputStyle={styles.input}
                secureTextEntry={true}
                placeholder='Password'
                leftIcon={
                    <Icon
                    name='lock'
                    size={30}
                    color='white'
                    />
                }
                />
                <Button 
                onPress={() => navigation.replace("Home")}
                buttonStyle={styles.loginBtn} title={"Login"} />

                <Text onPress={() => navigation.navigate("Signup")} style={styles.signuptext}>New User?</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#212b46',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    footer: {
        color: "white",
        textAlign:'center',
        marginBottom: 10
    },
    signuptext: {
        color: "white",
        textAlign:'center',
        marginTop: 30,
        fontSize: 18
    },
    loginBtn: {
        backgroundColor: '#ff6600ff'
    },
    logo: {
        width: 150,
        height: 150,
    },
    form:{
        width: "90%"
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    input: {
        color: 'white'
    },
    header: {
        width: '100%',
        height: 70,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#202738',
    },
    headerTitle: {
        fontSize: 20,
        color:'white'
    },
});

export default LoginPage;