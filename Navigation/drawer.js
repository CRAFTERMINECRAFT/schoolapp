import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'
import Profile from '../screens/profile'
import Logout from '../screens/logout'


const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
  render(){
    return(
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    )
  }
}