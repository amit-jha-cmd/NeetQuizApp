import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';


const StartQuiz = ({navigation, route}) => {
    const {subject} = route.params;
    return(
        <SafeAreaView  style={styles.main}>
        <Card containerStyle={styles.cardMain}>
            <View style={styles.row1}>
                <Text style={styles.title}>{subject}</Text>
            </View>
            <View style={styles.row2}>
                <Text style={styles.subdetail}>
                    THIS SUBJECT IS THE BLAH BLAH OF LIFE TO SUCH AN 
                    EXTENT THAT WE CAN BE VERY SURE TO HAVE A DIFFERENT
                    ACTION CLASS OF THINGS TO WORK WITH.
                </Text>
            </View>
            <View style={styles.row3}>
                <Text style={styles.title}>RULES</Text>
                <Text style={styles.rules}>
                    1. THE FIRST RULE IS TO SLEEP PROPERLY.
                </Text>
                <Text style={styles.rules}>
                    2. THEN MAKE SURE YOU DON'T CHEAT.
                </Text>
                <Text style={styles.rules}>
                    3. THEN DANCE WITH ME AND SLEEP WELL.
                </Text>
            </View>
            <View style={styles.row4}>
                <Button 
                onPress={() => navigation.goBack()}
                title={"Cancel"} 
                buttonStyle={styles.red}
                containerStyle={styles.canclebtn} />
                <Button 
                onPress={() => navigation.navigate("Quiz")}
                buttonStyle={styles.green}
                title={"Start"} 
                containerStyle={styles.startbtn} />
            </View>
        </Card>
      </SafeAreaView>)
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#212b46',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    subdetail: {
        color: 'white'
    },
    rules: {
        color: 'white',
        textAlign:'left',
        fontSize: 20
    },
    cardMain: {
        backgroundColor: '#354266',
        borderWidth: 0,
        // height: '97%',
        borderRadius: 5,
        // flex: 1,
    },
    row1: {
        width: '100%',
        height: "10%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row2: {
        width: '100%',
        display: 'flex',
        borderBottomWidth: 1,
        borderBottomColor: '#283352',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    row3: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
    },
    row4: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    red: {
        backgroundColor: '#d14040',
    },
    canclebtn: {
        width: "48%",
    },
    green:{
        backgroundColor: '#3aaa65',
    },
    startbtn: {
        width: "48%",
    }
})

export default StartQuiz;