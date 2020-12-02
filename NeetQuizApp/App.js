/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/home.page';
import Ionicons from 'react-native-vector-icons/Ionicons';
import User from './src/user.page';
import LeaderBoardScreen from './src/leaderboard.page';
import { createStackNavigator } from '@react-navigation/stack';
import StartQuiz from './src/StartQuiz.page';
import Quiz from './src/Quiz.page';
import LoginPage from './src/Login.Page';
import SignupPage from './src/Signup.Page';
import ReportPage from './src/Report.Page';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Report" component={ReportPage} />
        <Stack.Screen name="StartQuiz" component={StartQuiz} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}
 

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator 
      lazy={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 30;
          if (route.name === 'Home') {
            iconName = focused
              ? 'md-home'
              : 'md-home';
            color = focused
            ? 'white'
            : '#3a435a'
          } else if(route.name === 'User'){
            iconName = focused 
              ? 'md-person'
              : 'md-person';
            color = focused
            ? 'white'
            : '#3a435a';
          } else if (route.name === 'Leaderboard'){
            iconName = focused
            ? 'ios-list'
            : 'ios-list';
            color = focused
            ? 'white'
            : '#3a435a';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: '#212b46',
        style: {
          backgroundColor: '#212b46',
          height: 60,
          borderTopWidth: 1, 
          borderTopColor: '#202738'

        }
      }}>
        <Tab.Screen 
        name="Home" 
        component={Home}/>
        <Tab.Screen
        name = 'Leaderboard'
        component = {LeaderBoardScreen} />
        <Tab.Screen
        name="User"
        component={User} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  
})



export default App;
