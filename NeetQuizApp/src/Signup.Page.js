import React from 'react';
import { SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    ScrollView, 
    View, Text, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupPage = ({navigation}) => {
    return(
        <SafeAreaView  style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor={'#212b46'}/>
            <View style={styles.form}>
                <Input
                placeholderTextColor={"white"}
                inputStyle={styles.input}
                placeholder='Email'
                leftIcon={
                    <Icon
                    name='envelope-o'
                    size={30}
                    color='white'
                    />
                }
                />

                <Input
                placeholderTextColor={"white"}
                inputStyle={styles.input}
                placeholder='username'
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

                <Input
                placeholderTextColor={"white"}
                inputStyle={styles.input}
                placeholder='Re-enter Password'
                leftIcon={
                    <Icon
                    name='lock'
                    size={30}
                    color='white'
                    />
                }
                />

                <Button buttonStyle={styles.loginBtn} title={"Signup"} />

                <Text onPress={() => navigation.navigate("Login")} style={styles.signuptext}>Login?</Text>
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
        marginTop: 20,
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

export default SignupPage;