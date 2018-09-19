import React, { Component } from 'react';

import {
	Keyboard,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	ScrollView,ImageBackground,Image
} from 'react-native';

import Helpers from '../Helpers';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Styles';
import AuthInput from '../Reusable/AuthInput'
import AuthButton from "../Reusable/AuthButton";
import {ICONS,colors} from "../../../../constants/AppConstants";
export default class SignUp extends Component {

	static navigationOptions = {
		title: 'Registration',
		//header: null,
	};

	constructor(props){
		super(props);
		this.state = {
			login: false,
			err_msg: '',

			first_name: '',
			last_name: '',
			email: '',
			pass: '',
			con_pass: '',

			hide_action_buttons: false,
		};
	}

	render(){
		return(

			<ImageBackground style={[styles.container_bg]} source = {ICONS.bgImage}>
				<KeyboardAwareScrollView>
				<View style={[styles.container_center,{marginTop:0,marginBottom:20}]}>
					<TouchableOpacity style = {{justifyContent:'center',alignItems:'center',marginBottom:10}}>
						<Image style={{height:100,width:100,borderRadius:50}} source={ICONS.userProfile}/>
						<Text style = {{textAlign:'center',color:colors.whiteColor}}>Upload Profile Photo</Text>
					</TouchableOpacity>

					<AuthInput
							onSubmitEditing={Keyboard.dismiss}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({first_name: text}) }
							value={this.state.first_name}
							placeholder='Username'
							maxLength = {20}
							leftImage = {ICONS.userProfile}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>

						<AuthInput
							onSubmitEditing={Keyboard.dismiss}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({last_name: text}) }
							value={this.state.last_name}
							placeholder='E-mail'
							maxLength = {20}
                            leftImage = {ICONS.emailImage}
							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>

						<AuthInput
							onSubmitEditing={Keyboard.dismiss}
							//style={styles.text_input_white}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({email: text}) }
							value={this.state.email}
							placeholder='Mobile'
							mobileInput
							maxLength = {10}
							leftImage = {ICONS.phoneImage}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>

						<AuthInput
							onSubmitEditing={Keyboard.dismiss}
							//style={styles.text_input_white}
							underlineColorAndroid='transparent'
							onChangeText= {(text) => this.setState({pass: text}) }
							value={this.state.pass}
							placeholder='Language'
							maxLength = {50}
							leftImage = {ICONS.languageImage}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>
						<AuthInput
							onSubmitEditing={Keyboard.dismiss}
							//style={styles.text_input_white}
							underlineColorAndroid='transparent'

							onChangeText= {(text) => this.setState({pass: text}) }
							value={this.state.pass}
							placeholder='Location'
							maxLength = {50}
							leftImage = {ICONS.locationImage}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>
						<AuthInput
							onSubmitEditing={Keyboard.dismiss}
							//style={styles.text_input_white}
							underlineColorAndroid='transparent'
							secureTextEntry={true}
							onChangeText= {(text) => this.setState({pass: text}) }
							value={this.state.pass}
							placeholder='Password'
							maxLength = {50}
							leftImage = {ICONS.lockImage}

							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>
						<AuthInput
							onSubmitEditing={Keyboard.dismiss}
							//style={styles.text_input_white}
							underlineColorAndroid='transparent'
							secureTextEntry={true}
							onChangeText= {(text) => this.setState({pass: text}) }
							value={this.state.pass}
							placeholder='Confirm Password'
							maxLength = {50}
							leftImage = {ICONS.lockImage}
							onFocus={()=>{this.hide_action_buttons(true)}}
							onBlur={()=>{this.hide_action_buttons(false)}}
						/>
				</View>

						<AuthButton primary style={{marginTop:20}} onPress={this.submitForm.bind(this)} loading={this.state.isRequesting}>Register</AuthButton>

					<View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:20,
                        height:21 ,
                        marginBottom:5,
                        paddingHorizontal:15}}>
						<Text style= {styles.text_link}>Already registered?</Text>
						<TouchableOpacity style={{borderBottomWidth: 1.0,
                            borderColor: colors.whiteColor,
                            borderStyle: 'solid',}} onPress={()=>{Helpers.redirect('LogIn', this.props.navigation)}}>
							<Text style={styles.text_link1}>Login here</Text>
						</TouchableOpacity>

					</View>



				</KeyboardAwareScrollView>

			</ImageBackground>
		);
	}


	hide_action_buttons = (action) =>{
		if(this.state.hide_action_buttons != action){
			this.setState({
				hide_action_buttons : action
			});
		}
	}



	async submitForm(){

		alert('Not functional yet.');

	}



} /// End Class