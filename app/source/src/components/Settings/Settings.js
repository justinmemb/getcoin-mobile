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

import styles from './Styles';
import ServiceApi from '../../../Utils/ServiceApi/index'
import Notice from '../../../Utils/Notice';
import AuthButton from "../Reusable/AuthButton";
import {colors, ICONS} from "../../../../constants/AppConstants";
import DeviceUtils from "../../../Utils/DeviceUtils";
import AuthInput from '../Reusable/AuthInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Helpers from '../Helpers'


export default class Settings extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        //const { rightButton } = state.params;
        return {
            title:  'Setting',
            //headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Icon name="bars" style={styles.menu_icon} /></TouchableOpacity>,
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

                < KeyboardAwareScrollView >

                        <TouchableOpacity style={styles.nav_item1} onPress={this.wallet}>
                            <Image source={ICONS.walletImage} style = {{resizeMode:'contain',height:25,width:25,}}/>
                            <Text style={styles.nav_text}>Wallet</Text>
                            <View style={{marginLeft:50}}>
                            <Image source={ICONS.arrow_icon} style = {{resizeMode:'contain',height:25,width:25, marginRight:0}}/>
                            </View>

                        </TouchableOpacity>

                    <TouchableOpacity style={styles.nav_item} onPress={this.home}>
                        <Image source={ICONS.lockImage} style = {{resizeMode:'contain',height:25,width:25,}}/>
                        <Text style={styles.nav_text}>Change Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nav_item} onPress={this.home}>
                        <Image source={ICONS.pin_change_icon} style = {{resizeMode:'contain',height:25,width:25,}}/>
                        <Text style={styles.nav_text}>Change Pin</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.nav_item} onPress={this.home}>
                        <Image source={ICONS.notification_icon} style = {{resizeMode:'contain',height:25,width:25,}}/>
                        <Text style={styles.nav_text}>Notification</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.nav_item} onPress={this.home}>
                        <Image source={ICONS.help_support_icon} style = {{resizeMode:'contain',height:25,width:25,}}/>
                        <Text style={styles.nav_text}>Help & Support</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView >

            </ImageBackground>
        );
    }

    async submit() {

        // if(this.state.email === '' || this.state.pass === ''){
        //   Notice.toast('Email & Password is required');
        // 	return;
        // }
        //

        Helpers.redirect('Home', this.props.navigation);
    }

}