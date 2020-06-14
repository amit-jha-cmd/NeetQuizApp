import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';


const ProfileCard = () => {
    return(<Card containerStyle={styles.main}>
        <TouchableNativeFeedback>
            <View style={styles.container}>
                <View style={styles.col1}></View>
                <View style={styles.col2}>
                    <View style={styles.detail}>
                        <Text style={styles.text}>Username</Text>
                        <Text style={styles.text}>Email</Text>
                        <Text style={styles.text}>Percentile</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
        </Card>)
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#354266',
        borderWidth: 0,
        height: 100,
        borderRadius: 5,
        padding: 0
    },
    col1: {
        height: '90%',
        width: 90,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#747c94'
    },
    detail: {
        height: "100%",
        marginLeft: '10%',
        display:'flex',
        alignItems: 'flex-start',
        justifyContent:'center'
    },
    col2: {
        flex: 1,
        height: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    },
    text:{
        fontSize: 20,
        color: 'white'
    }
})


export default ProfileCard;