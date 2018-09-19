import React, { Component } from 'react';

import {
	AsyncStorage,
} from 'react-native';

import{
	NavigationActions,
} from 'react-navigation';

const Helpers = {

	redirect: (screen, navigator) => {
		navigator.navigate(screen);
	},

	reset: (screen, navigator) => {
		return navigator.dispatch(NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: screen})
			]
		}));
	},

	logout: (navigator) =>{

		try {

			AsyncStorage.removeItem('@fytrr_settings');

			GLOBAL.EMAIL = '';
			GLOBAL.PASS = '';
			GLOBAL.USER_ROLE = '';
			GLOBAL.LOGGED_IN = false;
			alert('Data removed');

		} catch (e) {
			alert('Some problem in deleting '+ e.message);
		}

		navigator.navigate('Login');
	},


	operating_system: (id) => {
		let os = '';

		switch (id) {
			case '1':
				os = 'Windows';
			break;

			case '2':
				os = 'Mac';
			break;

			case '3':
				os = 'iOS';
			break;

			case '4':
				os = 'Android';
			break;

			default:
			os = '';
		}

		return os;
	}

}

export default Helpers;