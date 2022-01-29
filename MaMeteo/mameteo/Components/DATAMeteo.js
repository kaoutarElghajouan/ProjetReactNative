import React,{useState,useEffect} from 'react'
import {View,TextInput,FlatList,ActivityIndicator,SafeAreaView,StyleSheet} from 'react-native'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const App=()=> {
    const [isLoading,SetLoading]=useState(true);
    const [filterData,setfilterData]=useState([]);
    const [masterData,setMasterData]=useState([]);
    const [search,SetSearch]=useState('');

    useEffect(()=>{
      const MoviesURL="https://jsonplaceholder.typicode.com/posts"
      fetch(MoviesURL).
      then((response)=>response.json()).
      then((Responsejson)=>{
        setfilterData(Responsejson)
        setMasterData(Responsejson);
      }).
      catch((error)=>alert(error)).
      finally(SetLoading(false));
    });

    //fonction filtring search
  const searchFilter =(text) => {
        if(text){
            const newData = masterData.filter((item) => {
                
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase(); 
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            SetSearch(text);
        } else {
            setfilterData(masterData);
            SetSearch(text);
        }
    }


  return (
    <SafeAreaView style={styles.container} >
          <View>
            <TextInput
         placeholder="Search"
         value={search}
         underlineColorAndroid="transparent"
          style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,}}
          onChangeText={(text)=>searchFilter(text)}
         
        
        />
      </View>
    {isLoading ?<ActivityIndicator/>:<FlatList
    data={filterData}
    keyExtractor={({id},index)=>id}
    renderItem={({item})=>{
      return(
   
         <ListItem >
        <ListItemAvatar>
          <Avatar alt="Casa" src="https://via.placeholder.com/150" />
        </ListItemAvatar>
        <ListItemText
          primary={item.title.toUpperCase()}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.id + " -"}
              </Typography>
              
              {item.body}
            </React.Fragment>
          }
        />
      </ListItem>
       
      );
    }}
    />
}
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});

export default App;