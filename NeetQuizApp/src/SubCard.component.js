import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';


const SubCard = ({title, navigation}) => {
    return(
        <Card containerStyle={styles.main}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Quiz', {subject: title})}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
        </Card>
        
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#354266',
        borderWidth: 0,
        height: 100,
        borderRadius: 5,
        padding: 0
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
        height: '100%'
    }
})

export default SubCard;