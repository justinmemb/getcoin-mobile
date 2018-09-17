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
    ImageBackground,
} from 'react-native';

import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import styles from './UI/Styles.js';
import ServiceApi from '../../utilities/serviceapi/index';
import Notice from '../../utilities/Notice';
import AuthButton from './Reusable/AuthButton';
import { colors, ICONS } from '../../../constants/AppConstants';
import DeviceUtilities from '../../utilities/DeviceUtilities';
import AuthInput from './Reusable/AuthInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Helpers from './Helper';

export default class Feedback extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } ({ navigation }) => {
            return {
                tabBarVisible: true,
                navBarVisible: true,
                title: 'Feedback',
                headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                    <Image source={ICONS.menu_icon} style={styles.menu} />
                </TouchableOpacity>,
                tabBarIcon: <Image source={ICONS.tab_feedback_icon} />
            }
        }
    };

    render() {
        return (
            <ImageBackground style={[styles.container_bg]} source={ICONS.bgImage}>
                <StatusBar barStyle="light-content" />
                <KeyboardAwareScrollView>
                    <View style={customStyle.topContainer}>
                        <Image source={ICONS.logoImage} style={customStyle.image}/>
                    </View>
                    <View style={customStyle.secondTopContainer}>
                        <Text style={customStyle.someTextStyle}>Your Feedback</Text>
                        <AutoGrowingTextInput style={{height: 200, flex: 1}} placeholder={'Enter here'} />
                    </View>
                    <AuthButton primary style={{marginTop: 20}} onPress={()=>console.log('Here')}>Submit</AuthButton>
                </KeyboardAwareScrollView>
            </ImageBackground>
        );
    }
}

const customStyle = {

    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10, 
        height: 200,
        width: DeviceUtilities.screen.width,
        marginLeft: 0, 
        marginBottom: 20,
    },

    secondTopContainer: {
        flex: 2,
        flexDirection: 'column',
        margin: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
    },

    someTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },

    image: {
        resizeMode: 'contain',
        height: 200,
        width: 200,
    },
}