import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SessionDetail from './SessionDetail.Component';

const Analysis = () => {
    return(<Card containerStyle={styles.main}>
            <View style={styles.container}>
                <SessionDetail />
                <SessionDetail />
                <SessionDetail />
            </View>
        </Card>)
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#354266',
        borderWidth: 0,
        // height: 250,
        marginBottom: 10,
        borderRadius: 5,
        padding: 0
    },
    col1: {
        height: 110,
        width: "49%",
        marginRight: 1,
        borderRightWidth: 1,
        borderRightColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detail: {
        height: "100%",
        marginLeft: '4%',
        display:'flex',
        alignItems: 'flex-start',
        justifyContent:'center'
    },
    col2: {
        height: 110,
        width: "49%",
        marginLeft: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        // flexDirection: 'row',
        // height: '100%'
    },
    innerCardCorrect: {
        width: '80%',
        height: '100%',
        backgroundColor: '#3aaa65',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    innerCardWrong: {
        width: '80%',
        height: '100%',
        backgroundColor: '#d14040',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    percentage: {
        fontSize: 35,
        fontWeight: 'bold'
    },
})


export default Analysis;