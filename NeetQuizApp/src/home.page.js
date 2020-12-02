import React from 'react';
import { SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    ScrollView, 
    View, Text } from 'react-native';
import SubCard from './SubCard.component';


const Home = ({navigation}) => {
    return(
        <SafeAreaView  style={styles.main}>
        <StatusBar barStyle="light-content" backgroundColor={'#212b46'}/>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>QUIZ</Text>
        </View>
        <ScrollView>
            <SubCard navigation={navigation} title={'ZOOLOGY'}/>
            <SubCard  navigation={navigation} title={'BOTANY'}/>
            <SubCard  navigation={navigation} title={'ALL'}/>
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
});

export default Home;