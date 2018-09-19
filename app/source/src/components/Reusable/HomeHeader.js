import React,{Component} from 'react';
import {View, TouchableOpacity, Image,Text,StyleSheet,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,height} = Dimensions.get('window');
import RootSiblings from 'react-native-root-siblings';

export  default  function HomeHeader ({onMenuPress,OnNavPress,OnUserIconPress}) {


    return(
        new RootSiblings(  <View style = {styles.container}>
            <TouchableOpacity onPress = {()=>onMenuPress} style = {styles.roundedButton}>
                <Icon name="bars" style={styles.menu_icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=>{console.log('hello',OnNavPress)}} style = {styles.roundedButton}>
                <Icon name="location-arrow" style={styles.menu_icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=>OnUserIconPress} style = {styles.roundedButton}>
                <Icon name="user" style={styles.menu_icon}  />
            </TouchableOpacity>

        </View>))


}

const styles = StyleSheet.create({
 container:{

     top:50,
     position:'absolute',
     flexDirection:'row',
     justifyContent:'space-around',
     width:width,
     height:80,
     alignItems:'center',
     backgroundColor:'transparent'

 },
    roundedButton:{
     height:80,
     width:80,
     borderRadius:40,
     backgroundColor:'black',
     justifyContent:'center' ,
     alignItems:'center',
        opacity:0.8
    },
    menu_icon:{
        color: '#fff',
        fontSize:27
    },
});