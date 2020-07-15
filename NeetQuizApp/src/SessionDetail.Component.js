import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';


const SessionDetail = () => {
    return(
        <View style={styles.main}>
            <Text style={[styles.right, styles.text]}>23%</Text>
            <Text style={[styles.wrong, styles.text]}>39%</Text>
            <Button containerStyle={styles.btn} title={"Retake"} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: "95%",
        marginTop:10,
        marginBottom: 5,
        height: 50,
        backgroundColor: "#293557",
        borderRadius:5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text:{
        fontSize: 19,
        fontWeight: 'bold',
        width: "30%",
        textAlign:'center'
    },
    right: {
        color: 'green'
    },
    wrong: {
        color: 'red'
    },
    btn: {
        width: "37%",
    }
})



export default SessionDetail;