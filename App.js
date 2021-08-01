import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import Submit from './screens/submitHwk'


export default class App extends React.Component {
  render(){
    return (

        <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Dashboard: {screen: Dashboard},
  Submit: {screen: Submit},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      //console.log(routeName)
      
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  Login :Login,
  TabNavigator:TabNavigator
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
