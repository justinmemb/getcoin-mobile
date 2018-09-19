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
	View,AsyncStorage,Image,ImageBackground
} from 'react-native';

import Helpers from '../Helpers.js';

//UI components
import styles from './Styles';
import ServiceApi from '../../../Utils/ServiceApi/index'
import Notice from '../../../Utils/Notice';
import AuthButton from "../Reusable/AuthButton";
import {colors, ICONS} from "../../../../constants/AppConstants";
import DeviceUtils from "../../../Utils/DeviceUtils";
import AuthInput from '../Reusable/AuthInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class Login extends Component {

	static navigationOptions = {
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
			err_msg: '',
			isRequesting:false,
		};
	}


	render(){

		return(

			<ImageBackground style={[styles.container_bg]} source = {ICONS.bgImage}>

				<StatusBar
					//backgroundColor="#fff"
					barStyle="light-content"
				/>
                 <KeyboardAwareScrollView>
				<View style={styles.container_center}>
					<View style = {{flex:0,
						alignItems:'center',
						justifyContent:'center',marginTop:10,height:200 ,
						width:DeviceUtils.screen.width,
						marginLeft:0,marginBottom: 20,}}>
					<Image source={ICONS.logoImage} style = {{resizeMode:'contain',height:200,width:200,}}/>
					</View>

					{/*<Text style={{marginBottom: 30, fontSize: 40, fontWeight: 'bold', textAlign: 'center' ,color:'white'}}>Get Coins</Text>*/}

					<AuthInput
						onSubmitEditing={Keyboard.dismiss}
						//style={styles.text_input_white}
						underlineColorAndroid='transparent'
						onChangeText= {(text) => this.setState({email: text}) }
						value={this.state.email}
						placeholder='User Name'
						keyboardType = 'email-address'
						maxLength = {50}
						leftImage = {require('app/source/Assets/getcoinsAssets/myprofile_usename.png')}

					/>

					<AuthInput
						onSubmitEditing={Keyboard.dismiss}
						//style={styles.text_input_white}
						underlineColorAndroid='transparent'
						secureTextEntry={true}
						onChangeText= {(text) => this.setState({pass: text}) }
						value={this.state.pass}
						placeholder='Password'
						leftImage = {require('app/source/Assets/getcoinsAssets/myprofile_lock.png')}
					/>


					<Text style={styles.err_msg_text}>{this.state.err_msg}</Text>
					<AuthButton primary onPress={this.submitForm.bind(this)} loading={this.state.isRequesting}>Login</AuthButton>
					<View style={{
						flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
						marginTop:5,
						height:21 ,
                       // width:DeviceUtils.screen.width-50,
                        marginBottom:5,
						paddingHorizontal:15}}>

						<View style={{
							backgroundColor : 'white',
                            height:0.5 ,
							flex:1,
                           // width:DeviceUtils.screen.width/2-25,

                            }}/>

						<Text style={styles.text_discription }>or</Text>
						<View style={{
							flex:1,
							align:'right',
                            backgroundColor : 'white',
                            height:0.5 ,
                            //width:DeviceUtils.screen.width/2-25,
                        }}/>

					</View>


					<AuthButton primary onPress={this.pinVerification.bind(this)} loading={this.state.isRequesting}>Login With OTP</AuthButton>

					{/*<TouchableOpacity style={[styles.btn, styles.btn_black]} onPress={this.submitForm.bind(this)} >*/}
						{/*<Text style={styles.btn_text}>LOGIN</Text>*/}
					{/*</TouchableOpacity>*/}

					<TouchableOpacity style={{marginTop: 15}} onPress={()=>{Helpers.redirect('ForgotPassword', this.props.navigation)}}>
						<Text style={styles.text_link}>Forgot Password?</Text>
					</TouchableOpacity>

					<View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:40,
                        height:21 ,
                        marginBottom:5,
                        paddingHorizontal:15}}>
						<Text style= {styles.text_link}>Dont have an account?</Text>
					<TouchableOpacity style={{borderBottomWidth: 1.0,
                        borderColor: colors.whiteColor,
                        borderStyle: 'solid',}} onPress={()=>{Helpers.redirect('SignUp', this.props.navigation)}}>
						<Text style={styles.text_link1}>Register Here</Text>
					</TouchableOpacity>

					</View>

				</View></KeyboardAwareScrollView>

			</ImageBackground>
		);
	}


	async submitForm() {

        	// if(this.state.email === '' || this.state.pass === ''){
             //   Notice.toast('Email & Password is required');
        	// 	return;
        	// }
            //

            Helpers.redirect('Home', this.props.navigation);
      }

    async pinVerification() {

        Helpers.redirect('PinVarification', this.props.navigation);
    }


} /// End Class