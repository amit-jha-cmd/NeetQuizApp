import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';



const LeaderBoardScreen = () => {
    const list = [
        {
          name: 'Amy Farha',
          subtitle: 'Score: 212'
        },
        {
          name: 'Chris Jackson',
          subtitle: 'Score: 200'
        },
      ]

    return(<SafeAreaView style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>LEADERBOARD</Text>
        </View>
        <ScrollView>
            {
                list.map((l, i) => (
                <ListItem
                    containerStyle={styles.card}
                    key={i}
                    leftElement={<View style={styles.leftElement}>
                                    <Text style={styles.rank}>{i}</Text>
                                            </View>}
                    titleStyle={styles.cardTitle}
                    title={l.name}
                    subtitleStyle={styles.cardSubTitle}
                    subtitle={l.subtitle}
                    bottomDivider
                />
                ))
            }
        </ScrollView>
        <ListItem
            containerStyle={styles.mycard}
            leftElement={<View style={styles.leftElement}>
                            <Text style={styles.myrank}>33</Text>
                                    </View>}
            titleStyle={styles.mycardTitle}
            title={"Amit Jha"}
            subtitleStyle={styles.mycardSubTitle}
            subtitle={"Score: 24"}
            bottomDivider
        />
        </SafeAreaView>)
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#212b46',
    },
    card: {
        margin: 10,
        backgroundColor: '#354266',
        borderBottomWidth: 0
    },
    mycard: {
        margin: 10,
        backgroundColor: '#dbdbdb',
        borderBottomWidth: 0
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
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    cardSubTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    headerTitle: {
        fontSize: 20,
        color:'white'
    },
    myheaderTitle: {
        fontSize: 20,
        color:'#212b46'
    },
    leftElement: {
        width: '15%',
        alignItems: 'center',
        display: 'flex',
        margin: 5,
    },
    rank: {
        fontSize: 25,
        color: 'white'
    },
    myrank: {
        fontSize: 25,
        color: '#212b46'
    }
})

export default LeaderBoardScreen;