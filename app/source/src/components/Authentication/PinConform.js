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


export default class PinConform extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        //const { rightButton } = state.params;
        return {
            title:  'Verification',
            //headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Icon name="bars" style={styles.menu_icon} /></TouchableOpacity>,
        }
    };

    constructor(props){
        super(props);
        this.state = {
            pin: '',

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
                            marginLeft:0,marginBottom: 30,}}>
                            <Image source={ICONS.logoImage} style = {{resizeMode:'contain',height:200,width:200,}}/>

                        </View>


                        <AuthInput
                            onSubmitEditing={Keyboard.dismiss}
                            style={{fontSize: 16,
                                color: 'white',
                                textAlign: 'center',

                                // Extra
                                flex: 1,
                                height: 50,
                                //marginRight:20,

                                width:DeviceUtils.screen.width,
                                ...Platform.select({ ios: { lineHeight: 23 } }),
                                //backgroundColor:'transparent'
                            }}
                            underlineColorAndroid='transparent'
                            onChangeText= {(text) => this.setState({pin: text}) }
                            value={this.state.pin}
                            placeholder ='Enter Your Pin'
                            keyboardType = 'phone-pad'
                            maxLength = {4}
                            fromSearch = {true}
                        />

                        <Text style={styles.err_msg_text}>{this.state.err_msg}</Text>

                        <AuthButton primary onPress={this.submit.bind(this)} loading={this.state.isRequesting}>SUBMIT</AuthButton>

                        <TouchableOpacity style={{marginTop: 20}} onPress={()=>{Helpers.redirect('Login', this.props.navigation)}}>
                            <Text style={styles.text_link}>or login with password</Text>
                        </TouchableOpacity>

                    </View>
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