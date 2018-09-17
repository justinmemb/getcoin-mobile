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
    View,
    AsyncStorage,
    Image,
    ImageBackground
} from 'react-native';

import Helpers from '../Helper.js';

// UI Components
import styles from './Styles';
import ServiceApi from '../../../utilities/serviceapi/index';
import Notice from '../../../utilities/Notice';
import AuthButton from '../Reusable/AuthButton';
import {colors, ICONS} from '../../../../constants/AppConstants';
import DeviceUtilities from '../../../utilities/DeviceUtilities';
import AuthInput from '../Reusable/AuthInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state={
            email: '',
            pass: '',
            user_id: '',
            user_role: '',
            login: false,
            err_msg: '',
            isRequesting: false,
        };
    };

    render() {
        return(
            <ImageBackground style={[styles.container_bg]} source={ICONS.bgImage}>
                <StatusBar
                    barStyle='light-content' 
                />
                <KeyboardAwareScrollView>
                    <View style={styles.container_center}>
                        <View style={{
                            flex: 0,
                            alignItems 'center',
                            justifyContent: 'center',
                            marginTop: 10,
                            height: 200,
                            width: DeviceUtilities.screen.width,
                            marginLeft: 0,
                            marginBottom: 20,
                        }}>
                        </View>
                        <AuthInput
                            onSubmitEditing={Keyboard.dismiss}
                            underlineColorAndroid='transparent'
                            onChangeText={{text} => this.setState({email: text})}
                            value={this.state.email}
                            placeholder='E-mail'
                            keybordType='email-address'
                            maxLength = {50}
                            leftImage={require('app/source/Assets/getcoinsAssets/myprofile_username.png')}
                        />
                        <AuthInput
                            onSubmitEditing={Keyboard.dismiss}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({pass: text})}
                            secureTextEntry={true}
                            value={this.state.pass}
                            placeholder='Password'
                            leftImage={require('app/source/Assets/getcoinsAssets/myprofile_lock.png')}
                        />
                        <Text style={styles.err_msg_text}>{this.state.err_msg}</Text>
                        <AuthButton primary onPress={this.submitForm} loading={this.state.isRequesting}>Login</AuthButton>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 5,
                            height: 21,
                            marginBottom: 5,
                            paddingHorizontal:15
                        }}>
                            <View style={{
                                backgroundColor: 'white',
                                height: 0.5,
                                flex: 1,
                            }} />
                            <Text style={styles.text_discription}>or</Text>
                            <View style={{
                                flex: 1,
                                align: 'right',
                                backgroundColor: 'white',
                                height: 0.5
                            }} />
                        </View>
                        <AuthButton primary onPress={this.pinVerification.bind(this)} loading={false}>Login With OTP</AuthButton>
                        <TouchableOpacity style={{marginTop: 15}} onPress={() => {Helpers.redirect('ForgotPassword', this.props.navigation)}}>
                            <Text style={styles.text_link}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 40,
                            height: 21,
                            marginBottom: 5,
                            paddingHorizontal: 15
                        }}>
                            <Text style={styles.text_link}>Don't have an account?</Text>
                            <TouchableOpacity style={{
                                borderBottomWidth: 1.0,
                                borderColor: colors.whiteColor,
                                borderStyle: 'solid',
                                }} onPress={() => {Headers.redirect('SignUp', this.props.navigation)}}>
                                <Text style={styles.text_link1}>Register Here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        );
    };  

    static navigationOptions = {
        header: null,
    };

    submitForm = async() => {
        if (this.state.email === '' || this.state.pass === '') {
            Notice.toast('Email & Password is required');

            return;
        }

        this.setState({
            isRequesting: true
        })

        try {
            let response = await ServiceApi.login(this.state.email, this.state.pass);
            
            console.log('____my', response);

            this.setState({
                isRequesting: false
            });

            if (response.error) {
                Notice.toast(response.message);

                return;
            }

            Helpers.redirect('Home', this.props.navigation);
        }
        catch (e) {
            console.log('_____new', e);

            this.setState({
                isRequesting: false
            });
            
            Notice.toast('Something went wrong');
        }
    }

    async pinVerification() {
        Helpers.redirect('PinVerification', this.props.navigation);
    }
}