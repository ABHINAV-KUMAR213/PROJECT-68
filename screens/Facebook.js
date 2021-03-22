import React from 'react';
import {StyleSheet,Text,View,Image} from "react-native";

export default class FbScreen extends React.Component{
    render(){
        return(
         <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
         <Image
          style={styles.image}
          source={{
            uri:
              'https://s3-symbol-logo.tradingview.com/facebook--600.png',
          }}
        />
         <Text style={{fontSize:22,color:'rgb(61,84,142)',fontWeight:800}}>FACEBOOK</Text>
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