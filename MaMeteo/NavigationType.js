import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import About from './Components/About'
import Search from './Components/Search'

const Tabs=createBottomTabNavigator({
  Search :{screen:Search},
  About:{screen:About}
});


