import React, { Component } from 'react';
import {
    Platform,
    Keyboard,
    Image,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
} from 'react-native';

import Helpers from '../Helper';
import styles from './Styles';

export default class Landing extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: '',
            user_id: '',
            user_role: '',
            login: false,
            err_msg: 'Please wait...',
        };
    }

    componentDidMount() {
        this.getStorage() {

        }
    }

    render() {

    }

    async getStorage() {
        try {
            var user_data = await AsyncStorage.getItem('@taxiapp_settings');

            if (user_data == null || user_data == ' ') {
                Helpers.redirect('Login', this.props.navigation);
            } else {
                user_data = JSON.parse(user_data);

                
            }
        }
    }

    redirect = () => {
        Helpers.reset('Home', this.props.navigation);
    }
}