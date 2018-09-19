import React, { Component } from 'react';

import {
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TextInput,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,AsyncStorage,Image,ImageBackground
} from 'react-native';

import styles from './UI/Styles.js';
import ServiceApi from '../../Utils/ServiceApi/index'
import Notice from '../../Utils/Notice';
import AuthButton from "./Reusable/AuthButton";
import {colors, ICONS} from "../../../constants/AppConstants";
import DeviceUtils from "../../Utils/DeviceUtils";
import AuthInput from './Reusable/AuthInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Helpers from './Helpers'


export default class Message extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            tabBarVisible : true,
            navBarVisible:true,
            title:'Message',
            headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Image source={ICONS.menu_icon} style = {styles.menu}/>

            </TouchableOpacity>,
            tabBarIcon:
                <Image
                    source={ICONS.emailImage}
                    //style={CommonStyles.tabBarIcon}
                />
            // header:null,
        }
    };

    constructor(props){
        super(props);
        this.state = {


        };
    }

    render(){

        return(

            <ImageBackground style={[styles.container_bg]} source = {ICONS.bgImage}>

                <StatusBar
                    //backgroundColor="#fff"
                    barStyle="light-content"
                />



            </ImageBackground>
        );
    }


}