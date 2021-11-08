
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View,Text } from 'react-native';

const Login = () => {
    return (
        <View>
            <Text>Hey Login screen here</Text>
        </View>
    );
};

const SignUp = () => {
    return (
        <View>
            <Text>Hey SignUp screen here</Text>
        </View>
    );
};

const AuthNavigator = () => {
    const AuthStack=createStackNavigator();
    return (
        <AuthStack.Navigator>
         <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
         <AuthStack.Screen name="Register" component={SignUp}></AuthStack.Screen>
        </AuthStack.Navigator>
      );
}

export default AuthNavigator;