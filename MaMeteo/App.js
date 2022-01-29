import React from 'react'
import{View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import Tabs from './NavigationType'
import About from './Components/About'
import Search from './Components/Search'


const Tabs=createBottomTabNavigator();
function App()  {

 /* const Tabs=createBottomTabNavigator({
  Search :{screen:Search},
  About:{screen:About}
});*/
  
 

/*const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}*/


    return (

       //<Tabs/>
<NavigationContainer>
   <Tabs.Navigator>
      <Tabs.Screen name="Home" component={About} />
      <Tabs.Screen name="Settings" component={Search} />
    </Tabs.Navigator>
    
   </NavigationContainer>  
    )
  }




export default App;