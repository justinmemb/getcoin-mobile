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
export default class PinVarification extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        //const { rightButton } = state.params;
        return {
            title:  'Login',
            //headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Icon name="bars" style={styles.menu_icon} /></TouchableOpacity>,
        }
    };
    constructor(props){
        super(props);
        this.state = {
            mobile: '',
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
                    <View style={styles.container_center}>
                        <View style = {{flex:0,
                            alignItems:'center',
                            justifyContent:'center',marginTop:10,height:200 ,
                            width:DeviceUtils.screen.width,
                            marginLeft:0,marginBottom: 50,}}>
                            <Image source={ICONS.logoImage} style = {{resizeMode:'contain',height:200,width:200,}}/>

                            <Text style={styles.text_discription }>We need your mobile number to login</Text>
                        </View>


                        <AuthInput
                            onSubmitEditing={Keyboard.dismiss}
                            //style={styles.text_input_white}
                            underlineColorAndroid='transparent'
                            onChangeText= {(text) => this.setState({email: text}) }
                            value={this.state.mobile}
                            placeholder='Mobile Number'
                            mobileInput
                            maxLength = {10}
                            leftImage = {ICONS.phoneImage}
                        />

                        <Text style={styles.err_msg_text}>{this.state.err_msg}</Text>

                        <AuthButton primary onPress={this.submitForm.bind(this)} loading={this.state.isRequesting}>NEXT</AuthButton>

                    </View>
                </KeyboardAwareScrollView >

            </ImageBackground>
        );
    }

    async submitForm() {

        // if(this.state.email === '' || this.state.pass === ''){
        //   Notice.toast('Email & Password is required');
        // 	return;
        // }
        //

        Helpers.redirect('PinConform', this.props.navigation);
    }

}