import React from 'react';
import {StyleSheet,Text,View,Image} from "react-native";

export default class IgScreen extends React.Component{
    render(){
        return(
            <View style ={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Image
          style={styles.image}
          source={{
            uri:
              'https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ',
          }}
        />
            <Text style={{fontSize:22,color:'rgb(204,46,115)',fontWeight:800}}>INSTAGRAM</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
image:{
    width: 220,
    height: 220,
    marginTop: 1,
    alignContent:"center",
    borderRadius:30,
}
});