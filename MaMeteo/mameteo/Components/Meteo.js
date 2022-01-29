import React,{Component,useEffect} from 'react'

import {View,Text,ActivityIndicator} from 'react-native'
import Style from '../Style'
import DATAMeteo from './DATAMeteo'
    
export default class Meteo extends Component{

    

constructor(props){
 
  super(props)

  this.state={
    ville:"casablanca",
    report:null
  }
}
 

  render(){
    if(this.state.report!=null){
   return(
    
       <ActivityIndicator color={Style.color} size="large"/>
   )
     }
     else
     return(

      <DATAMeteo/>

   /* <View >
         <Text>bonjour kaoutar</Text>
     </View>*/
     )
  
   
  }
}


