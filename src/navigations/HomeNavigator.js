
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

const Contacts = () => {
    return (
        <View>
            <Text>Hey contacts screen here</Text>
        </View>
    );
};

const ContactsDeatils = () => {
    return (
        <View>
            <Text>Hey ContactsDeatils screen here</Text>
        </View>
    );
};

const Createontacts = () => {
    return (
        <View>
            <Text>Hey Createontacts screen here</Text>
        </View>
    );
};


const Settings = () => {
    return (
        <View>
            <Text>Hey Settings screen here</Text>
        </View>
    );
};


const HomeNavigator = () => {
    const HomeStack=createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="Contacts">
         <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
         <HomeStack.Screen name="CreateContact" component={Createontacts}></HomeStack.Screen>
         <HomeStack.Screen name="Contact details" component={ContactsDeatils}></HomeStack.Screen>
         <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
      );
}

export default HomeNavigator;