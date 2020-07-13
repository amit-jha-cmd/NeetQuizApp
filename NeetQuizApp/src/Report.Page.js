import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import ReportCard from './ReportCard.component';


const ReportPage = ({navigation, route}) => {
    const {subject} = route.params;
    return(
        <SafeAreaView  style={styles.main}>
        <Card containerStyle={styles.cardMain}>
            <ReportCard number={"q."} time={"time/q"} type={""}/>
            <ReportCard number={11} time={"2.3 min"} type={"Correct"}/>
            <ReportCard number={4} time={"0.3 min"} type={"Incorrect"}/>
            <ReportCard number={5} time={"0.5 min"} type={"Don't Know"}/>
            <ReportCard number={20} time={"1.7 min"} type={"Total"}/>
            <View style={styles.row4}>
                <Button 
                onPress={() => navigation.navigate("Home")}
                title={"Quit"} 
                buttonStyle={styles.red}
                containerStyle={styles.canclebtn} />
                <Button 
                onPress={() => navigation.navigate("Quiz")}
                buttonStyle={styles.green}
                title={"Try Again"} 
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
        width: "95%",
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
        marginTop: 4,
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

export default ReportPage;