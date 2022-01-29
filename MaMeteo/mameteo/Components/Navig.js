import React,{Component} from 'react'
import{View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import About from './About'
import Search from './Search'


  const Tab = createBottomTabNavigator();
 

export default class Navig extends Component{
   
render(){

  return(
   
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color,size}) => {
            let iconName;

            if (route.name === 'About') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search-circle' : 'ios-search';
            }

            
            return <Ionicons name={iconName}   size ={size} color={color} />;
          },
          tabBarActiveTintColor: '#A2273C',
          tabBarInactiveTintColor: 'gray',
        })}
      >
         
        <Tab.Screen name="About" component={About} />
        <Tab.Screen  name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}


}

