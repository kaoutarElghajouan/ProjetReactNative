import React,{Component} from 'react'

import {View,Text,StyleSheet,TextInput} from 'react-native'


export default class Home extends Component{
  constructor(props){
      super(props)
      this.state={
          ville:'Casablanca'
      }
  }

  setVille =(text) =>{
  this.setState({
    ville:text
  })
  }

  render(){

return(

     <TextInput
        style={{height:40,borderColor:'gray',borderWidth:1}}
        placeholder="Enter Ville"
        onChangeText={(text)=>this.setVille(text)}
        value={this.state.ville}
       
      />
)

  }
}