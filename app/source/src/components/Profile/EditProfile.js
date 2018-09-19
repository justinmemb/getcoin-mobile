import React, { Component } from 'react';

import {
	Keyboard,
	KeyboardAvoidingView,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	ScrollView,
//	AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles';

export default class EditProfile extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		//const { rightButton } = state.params;
		return {
			title: 'Edit Profile',
			//headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Icon name="bars" style={styles.menu_icon} /></TouchableOpacity>,
		}
	};


	constructor(props){
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			phone: '',
			address: '',
			email: '',
			loaded: false,
			err_msg: '',
			
			hide_action_buttons: false,
		};
		//this.toggleModal = this.toggleModal.bind(this);
	}


	componentDidMount(){
		const{params} = this.props.navigation.state;
	}


	render(){

		return(
			<View style={styles.wrap}>

				<ScrollView>

					<View style={styles.row}>
						<Text style={styles.label}>First Name</Text>
						<TextInput
							onSubmitEditing={Keyboard.dismiss}
							style={styles.text_input}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({first_name: text}) }
							value={this.state.first_name}
							placeholder='Type your first name here'
							maxLength = {20}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>
					

						<Text style={styles.label}>Last Name</Text>
						<TextInput
							onSubmitEditing={Keyboard.dismiss}
							style={styles.text_input}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({last_name: text}) }
							value={this.state.last_name}
							placeholder='Type your last name'
							maxLength = {20}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>
					

						<Text style={styles.label}>Email</Text>
						<TextInput
							onSubmitEditing={Keyboard.dismiss}
							style={styles.text_input}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({email: text}) }
							value={this.state.email}
							placeholder='Type your email here'
							maxLength = {50}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>
					
					
						<Text style={styles.label}>Phone Number</Text>
						<TextInput
							onSubmitEditing={Keyboard.dismiss}
							style={styles.text_input}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({phone: text}) }
							value={this.state.phone}
							placeholder='Type your phone number here'
							keyboardType = 'phone-pad'
							maxLength = {10}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>

					</View>

				</ScrollView>

				{!this.state.hide_action_buttons &&

					<View style={styles.row}>
						<Text style={styles.err_msg_text}>{this.state.err_msg}</Text>
						<TouchableOpacity style={[styles.btn, styles.btn_default]}>
							<Text style={styles.btn_text}>Update Profile</Text>
						</TouchableOpacity>
					</View>
				}

			</View>

		);
	}


	hide_action_buttons = (action) =>{
		if(this.state.hide_action_buttons != action){
			this.setState({
				hide_action_buttons : action
			});
		}
	}

} /// End Class