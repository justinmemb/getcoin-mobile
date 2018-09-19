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

import Helpers from '../Helpers';

//UI components
import styles from './Styles';

export default class Landing extends Component {

	static navigationOptions = {
		//title: 'Home',
		header: null,
	};

	constructor(props){
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

	componentDidMount(){
		this.getStorage();
	}


	render(){

		return(

			<View style={[styles.container_bg]}>

				<StatusBar
					//backgroundColor="#fff"
					barStyle="light-content"
				/>

				<Text style={styles.app_heading}>Taxi App</Text>
				<Text style={[styles.text_white, {textAlign: 'center'}]}>{this.state.err_msg}</Text>

			</View>
		);
	}


	async getStorage(){
		try{
			var user_data = await AsyncStorage.getItem('@taxiapp_settings');

			if(user_data == null || user_data == '' ){

				Helpers.redirect('Login', this.props.navigation);

			} else {

				
				user_data = JSON.parse(user_data);

				//alert(user_data.email); return;

				GLOBAL.EMAIL = user_data.email;
				GLOBAL.PASS = user_data.password;
				GLOBAL.USER_ROLE = user_data.role;
				GLOBAL.LOGGED_IN = true;

			}

		} catch(error){
			alert('Some problem: ' + error.message);
		}
	}


	redirect = ()=>{
		Helpers.reset('Home', this.props.navigation);
	}


} /// End Class