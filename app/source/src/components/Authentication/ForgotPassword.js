import React, { Component } from 'react';
import {
    KeyboardAvoidingView,
    Keyboard,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    View,
    AsyncStorage,
    ImageBackground
} from 'react-native';

import AuthButton from '../Reusable/AuthButton';
import styles from './Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DeviceUtilities from '../../../utilities/DeviceUtilities';
import { colors, ICONS } from '../../../../constants/AppConstants';
import AuthInput from '../Reusable/AuthInput';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            err_msg: '',
            login: false,
            success: false,
        };
    }

    static navigationOptions = {
        title: 'Recover Password',
        headerTintColor: '#fff',
    };

    render() {
        if (this.state.success) {
            return this.success_view();
        }

        return(
            <ImageBackground style = {[styles.container_bg]} source = {require('app/source/Assets/getcoinsAssets/bg_main.jpg')}>
                <KeyboardAwareScrollView>
                    <View style = {styles.container_center}>
                        <View style = {{
                            flex: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 10,
                            height: 200,
                            width: DeviceUtilities.screen.width,
                            marginLeft: 0,
                            marginBottom: 20,
                        }}>
                            <Image source = {ICONS.logoImage} style = {{resizeMode: 'contain', height: 200, width: 200}} />
                        </View>
                        <Text style = {styles.text_discription}>Enter your email or mobile number.</Text>
                        <Text style = {styles.text_discription}>We will send you a link to reset your password.</Text>

                        <View style={styles.container_center}>
                            <AuthInput 
                                onSubmitEditing = {Keyboard.dismiss}
                                underlineColorAndroid = 'transparent'
                                onChangeText={(text) => this.setState({email: text})}
                                value = {this.state.email}
                                placeholder='Email or Mobile Number'
                                keyboardType= 'email-address'
                                maxLength={50}
                                leftImage={ICONS.emailImage}
                            />
                            <Text style={styles.err_msg_text}>{this.state.err_msg}</Text>
                        </View>
                        <AuthButton primary onPress={()=>alert('data')} loading={false}>Send</AuthButton>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }

    success_view = () => {
        let view;

        view = <View style = {styles.wrap}>
                    <View style = {styles.container_center}>
                        <Text style = {styles.heading_title}>Password reset link has sent to your email</Text>
                    </View>
               </View>

        return view
    }

    submitForm() {

    }
}