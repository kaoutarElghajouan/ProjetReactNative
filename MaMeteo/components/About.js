import React,{Component} from 'react'

import {View,Text,StyleSheet,ActivityIndicator} from 'react-native'

export default class About extends Component{
  render(){

   return(
     <View style={monStyle.view}>
         <Text style={monStyle.title}>A propos de moi </Text>

     <Text>
     Je suis Kaoutar El Ghajouan spécialiste en informatique, FullStack       developer JAVA/JEE, je peux devlopper des applications web et mobile en utilisant des outiles de management et gestion.
     </Text>

     </View>
   ) 
  }
}
const monStyle=StyleSheet.create({
  view:{
  margin :22,
  
  },

   title:{
     fontSize:22,
     marginBottom:22,
   }

}

)

