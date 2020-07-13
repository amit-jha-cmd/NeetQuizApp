import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const ReportCard = ({number, time, type}) => {
    return (
        <View style={styles.main}>
            <Text style={[styles.correct, styles.text]}>{type} </Text>
            <Text style={[styles.number, styles.text]}>{number}</Text>
            <Text style={[styles.time, styles.text]}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 50,
        backgroundColor: "#293557",
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex',
        flexDirection: 'row'
    },
    correct: {
        width: "40%",
    },
    number: {
        width: "20%"
    },
    time: {
        width: "40%"
    },
    text: {
        textAlign: 'center',
        fontSize: 19,
        color: 'white'
    }
})


export default ReportCard;