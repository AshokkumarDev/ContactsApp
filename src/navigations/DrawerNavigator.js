
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeNavigator from './HomeNavigator';



const DrawerNavigator = () => {
    const Drawer=createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
      );
}

export default DrawerNavigator;