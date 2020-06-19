import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Button } from 'react-native-elements';

const QuestionData = ({answer, submit , selected, setSelected}) => {
    const handlePress = (value) => {
        if(!submit){
            setSelected(value)
        }
    }
    return(
        <View>
            <Text style={styles.question}>
                This is a sample question you have
                to solve to get the answer
            </Text>
            <Text 
            onPress={() => handlePress("Option 1")} 
            style={ 
                (selected === "Option 1" && !submit)
                ?styles.selected
                :(answer === "Option 1" && submit)
                ?styles.answer
                :(answer !== "Option 1" && submit && selected === "Option 1")?styles.wrong:styles.option}>
                Option 1
            </Text>
            <Text onPress={() => handlePress("Option 2")} 
                style={ 
                (selected === "Option 2" && !submit)
                ?styles.selected
                :(answer === "Option 2" && submit)
                ?styles.answer
                :(answer !== "Option 2" && submit && selected === "Option 2")?styles.wrong:styles.option}>
                Option 2
            </Text>
            <Text onPress={() => handlePress("Option 3")} 
                style={ 
                (selected === "Option 3" && !submit)
                ?styles.selected
                :(answer === "Option 3" && submit)
                ?styles.answer
                :(answer !== "Option 3" && submit && selected === "Option 3")?styles.wrong:styles.option}>
                Option 3
            </Text>
            <Text onPress={() => handlePress("Option 4")} 
                style={ 
                (selected === "Option 4" && !submit)
                ?styles.selected
                :(answer === "Option 4" && submit)
                ?styles.answer
                :(answer !== "Option 4" && submit && selected === "Option 4")?styles.wrong:styles.option}>
                Option 4
            </Text>
        </View>
    )
}

const Loader = () => {
    return <View style={styles.loader}>
        <ActivityIndicator size={50} color="white"/>
    </View>
}

const Quiz = ({navigation}) => {
    const [loading, setLoading] = React.useState(true);
    const [answer, setAnswer] = React.useState("Option 1");
    const [selected, setSelected] = React.useState("");
    const [submit, setSubmit] = React.useState(false);
    React.useEffect(() => {
        var timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer)
        }
    }, [loading])

    const handleQuit = () => {
        if(!loading){
            navigation.goBack()
        }
    }

    const handleSubmit = () => {
        if(!submit){
            setSubmit(true);
        } else{
            setLoading(true);
            setSelected("");
            setSubmit(false);
        }
    }
    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.qnumber}>Question: 2/140</Text>
                <Text style={styles.point}>Point: 240</Text>
            </View>
            <Card containerStyle={styles.cardMain}>
                {loading
                ? <Loader />
                :<ScrollView>
                    <QuestionData 
                    submit={submit}
                    answer={answer} 
                    selected={selected}
                    setSelected={setSelected} />
                </ScrollView>}
            </Card>
            <View style={styles.row4}>
                <Button 
                onPress={handleQuit}
                title={"Quit"} 
                disabled={!submit}
                buttonStyle={styles.red}
                containerStyle={styles.canclebtn} />
                <Button 
                onPress={handleSubmit}
                disabled={(selected === "" || loading) ? true:false}
                buttonStyle={styles.green}
                title={submit ? "Next":"Submit"} 
                containerStyle={styles.startbtn} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#212b46',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: '#6b89ddc5',
        borderWidth: 0,
        // minHeight: "10%",
        margin: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: 'white'
    },
    wrong: {
        backgroundColor: '#d14040',
        borderWidth: 0,
        // minHeight: "10%",
        margin: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: 'white'
    },
    answer: {
        backgroundColor: '#3aaa65',
        borderWidth: 0,
        // minHeight: "10%",
        margin: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: 'white'
    },
    header: {
        width: '100%',
        top: 0,
        position: 'absolute',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#202738',
    },
    cardMain: {
        backgroundColor: '#354266',
        borderWidth: 0,
        width: "90%",
        // minHeight: "50%",
        borderRadius: 5,
        borderColor: 'white',
    },
    question: {
        backgroundColor: '#465a9186',
        borderWidth: 0,
        minHeight: 150,
        margin: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    option: {
        backgroundColor: '#465a9186',
        borderWidth: 0,
        // minHeight: "10%",
        margin: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: 'white'
    },
    row4: {
        width: '100%',
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        margin: 10,
        padding:10,
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
    },
    qnumber: {
        width: "50%",
        padding: 15,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        // backgroundColor: '#465a9186'
    },
    point: {
        width: "50%",
        textAlign: 'right',
        padding: 15,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        // backgroundColor: '#465a9186'
    }
})

export default Quiz;