import React, { Component } from 'react';
import {
    Platform,
    KeyboardAvodingView,
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Helpers from '../Helper';

export default class PinVerification extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mobile: '',
        };
    }

    render() {
        return(
            <ImageBackground style={[styles.container_bg]} source={ICONS.bgImage}>
                <StatusBar barStyle='light-content' />
                <KeyboardAwareScrollView>
                    <View style = {styles.container_center}>
                        <View style={{
                            flex: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 10,
                            height: 200,
                            width: DeviceUtilities.screen.width,
                            marginLeft: 0,
                            marginBottom: 50,
                        }}>
                            <Image source={ICONS.logoImage} style={{resizeMode: 'contain', height: 200, width: 200, }} />
                            <Text style={styles.text_discription}>We need your mobile number to login</Text>
                        </View>
                        <AuthInput
                            onSubmitEditing={Keyboard.dismiss}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.mobile}
                            placeholder='Mobile Number'
                            mobileInput
                            maxLength={10}
                            leftImage={ICONS.phoneImage} 
                        />
                        <Text style={styles.err_msg_text}>{this.state.err_msg}</Text>
                        <AuthButton primary onPress={this.submitForm.bind(this)} loading = {this.state.isRequesting}>NEXT</AuthButton>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            title: 'Login',
        }
    };

    async submitForm() {
        Helpers.redirect('PinConfirm', this.props.navigation);
    }
}