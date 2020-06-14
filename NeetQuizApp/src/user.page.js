import React from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileCard from './profileCard.component';


const User = () => {
    return(
        <SafeAreaView style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>PROFILE</Text>
        </View>
        <ScrollView>
            <ProfileCard />
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#212b46',
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