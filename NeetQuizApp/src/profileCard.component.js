import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileCard = () => {
    return(<Card containerStyle={styles.main}>
        <TouchableNativeFeedback>
            <View style={styles.container}>
                <View style={styles.col1}>
                    <Ionicons name={'md-person'} size={50} color={'white'} />
                </View>
                <View style={styles.col2}>
                    <View style={styles.detail}>
                        <Text style={styles.text}>Amit Jha</Text>
                        <Text style={styles.subtext}>Rank: 22222 | Percentile: 7%</Text>
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
        marginBottom: 10,
        height: 100,
        borderRadius: 5,
        padding: 0
    },
    col1: {
        height: 70,
        width: 70,
        margin: 15,
        borderRadius: 50,
        backgroundColor: '#747c94',
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
        color: 'white',
        padding: 5,
    },
    subtext:{
        fontSize: 15,
        color: 'white',
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#2b385c'
    }
})


export default ProfileCard;