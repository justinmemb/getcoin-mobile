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

import styles from './Styles';
import ServiceApi from '../../../utilities/serviceapi/index';
import Notice from '../../../utilities/Notice';
import AuthButton from '../Reusable/AuthButton';
import {colors, ICONS} from '../../../../constants/AppConstants';
import DeviceUtilities from '../../../utilities/DeviceUtilities';
import AuthInput from '../Reusable/AuthInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Helpers from '../Helper';

export default class PinConfirm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            pin: '',
        };
    }

    render() {
        return(
            <ImageBackground style={[styles.container_bg]} source = {ICONS.bgImage}>
                <StatusBar barStyle='light-content' />
                <KeyboardAwareScrollView>
                    <View style={styles.container_center}>
                        <View style= {{
                            flex: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 10,
                            height: 200,
                            width: DeviceUtilities.screen.width,
                            marginLeft: 0,
                            marginBottom: 30,
                        }}>
                            <Image source={ICONS.logoImage} style={{resizeMode: 'contain', height: 200, width: 200,}} />
                        </View>
                        <AuthInput  
                            onSubmitEditing={Keyboard.dismiss}
                            style={{
                                fontSize: 16,
                                color: 'white',
                                textAlign: 'center',
                                flex: 1,

                                height: 50,
                                width: DeviceUtilities.screen.width,
                                ...Platform.select({ ios: { lineHeight: 23 } }),
                            }}
                            underlineColorAndroid = 'transparent'
                            onChangeText = {(text) => this.setState({pin: text})}
                            value={this.state.pin}
                            placeholder='Enter Your Pin'
                            keyboardType = 'phone-pad'
                            maxLength = {4}
                            fromSearch = {true}
                        />
                        <Text style={styles.err_msg_text}>{this.state.err_msg}</Text>
                        <AuthButton primary onPress={this.submit.bind(this)} loading={this.state.isRequesting}>SUBMIT</AuthButton>
                        <TouchableOpacity style={{marginTop: 20}} onPress={() => Helpers.redirect('Login', this.props.navigation)}>
                            <Text style={styles.text_link}>or login with password</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        );
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            title: 'Verification',
        }
    };

    async submit() {
        Helpers.redirect('Home', this.props.navigation);
    }
}