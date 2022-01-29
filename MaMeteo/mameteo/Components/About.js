import React,{Component} from 'react'
import Style from '../Style'
import {View,Text,StyleSheet,Button} from 'react-native'

export default class About extends Component{
search(){
    this.props.navigation.navigate('Search')
}
  render(){

   return(
     <View style={Style.container}>
         
         <Text style={Style.title}>A propos de l'application </Text>

     <Text style={Style.text}>
      Très complète, l’application MaMeteo fait forte impression avec une interface globalement assez simple à prendre en main. La page d’accueil regroupe les tendances des villes ajoutées aux favoris et proposer d’épingler des cartes des températures en direct.
     </Text>
   <Button  color={Style.color} onPress={() => this.search()} title="Rechercher une ville "/>
     </View>
   ) 
  }
}


