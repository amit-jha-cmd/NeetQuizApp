import React from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileCard from './profileCard.component';
import PerformanceCard from './Performance.component';
import Analysis from './Analysis.Component';

const User = () => {
    return(
        <SafeAreaView style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>PROFILE</Text>
        </View>
        <ProfileCard />
        <ScrollView>
            <PerformanceCard />
            <Analysis />
        </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#212b46',
    },
    hintView: {
        width: '100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    hintText: {
        height: 30,
        fontWeight: 'bold',
        color: 'rgba(237, 237, 237, 0.37)',
        borderRadius: 15,
        padding: 5, 
        backgroundColor: '#2b385c'
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
})


export default User;