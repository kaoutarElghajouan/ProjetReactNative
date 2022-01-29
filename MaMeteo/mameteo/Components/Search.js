import React,{Component,useState,useEffect} from 'react';
import {Button,SafeAreaView} from 'react-native'
import{createStackNavigator} from '@react-navigation/stack'
import Style from '../Style'
import Meteo from './Meteo'
import DATAMeteo from './DATAMeteo'
import {About} from './About'
import {
  Container,
  VStack,
  Input,
  Icon,
  NativeBaseProvider,
  Center,
  Heading,
} from 'native-base';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Stack = createStackNavigator();



 export default function MyStack() {


  return (
        <Stack.Navigator>
        <Stack.Screen name="Chercher une ville" component={Search} />
          <Stack.Screen name="Meteo Casablanca" component={Meteo} />
      
    
      
    </Stack.Navigator>
  );
}


class Search extends Component{



  constructor(props){
      super(props)
      this.state={
          ville:'Casablanca'
      }
  }

submit(){
  this.props.navigation.navigate('Meteo Casablanca',{ville:this.state.ville})
}


  setVille =(text) =>{
  this.setState({
    ville:text
  })
  }

  render(){

return(
<SafeAreaView style={Style.container}>

    
      <NativeBaseProvider >
    <Center>
    <VStack width="100%" space={5} alignItems="center" style={Style.input}>
    
          <Input 
            value={this.state.ville}
            onChangeText={(text) => this.setVille(text)}

            placeholder="Search"
            variant="filled"
            width="100%"
            bg="white"
            borderRadius="10"
            py="1"
            px="2"
            placeholderTextColor="gray.500"
            _hover={{ bg: 'gray.200', borderWidth: 0 }}
            borderWidth="0"
            _web={{
              _focus: { style: { boxShadow: 'none' } },
            }}
            InputLeftElement={
              <Icon
                ml="2"
                size="5"
                color="gray.500"
                as={<Ionicons name="ios-search" />}
              />
            }
          />

        </VStack>

   

      </Center>
    </NativeBaseProvider>

    <Button color={Style.color} onPress={() => this.submit()}     title="Rechercher" />

    </SafeAreaView>
 
)

  }

}



