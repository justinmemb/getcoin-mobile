import React, { Component } from 'react';

import {
	Image,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import Helpers from './Helpers';

import styles from './UI/Styles.js';

export default class ProfilePhoto extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		//const { rightButton } = state.params;
		return {
			title: 'Profile Photo',
		}
	};

	constructor(props){
		super(props);
		this.state = {
			email: '',
			pass: '',
			user_role: '',
			loaded: true,
			upload: false,
			image_path: '',
		};
	}


	componentDidMount(){
		const{params} = this.props.navigation.state;

		this.get_profile_photo();

		if(params.upload == true){
			this.setState({
				image_path: params.image_path,
			}, this.upload_image);
		}

	}


	onSelect = (data) => {
		this.setState(data);
	};


	goto_gallery = ()=>{
		this.props.navigation.navigate('Gallery', { onSelect: this.onSelect });
	}


	render(){

		if(!this.state.loaded){
			return <View style={styles.row}><Text>Please wait...</Text></View>
		}

		return(
			<View style={styles.wrap}>

				<View style={[styles.row, {alignItems: 'center'}]}>
					{this.render_profile_photo()}
				</View>

				<View style={styles.footer}>
					<Text style={styles.err_msg_text}>{this.state.err_msg}</Text>

					<View style={styles.row_float}>

						<View style={[styles.box_float, {alignItems: 'center'}]}>
							<TouchableOpacity style={[styles.btn]} onPress={()=>{Helpers.redirect('TakePhoto', this.props.navigation)}}>
								<Text style={styles.text_link}>Take Photo</Text>
							</TouchableOpacity>
						</View>

						<View style={[styles.box_float, {alignItems: 'center'}]}>
							<TouchableOpacity style={[styles.btn]} onPress={this.goto_gallery}>
								<Text style={styles.text_link}>Gallery</Text>
							</TouchableOpacity>
						</View>

					</View>

				</View>

			</View>

		);
	}


	render_profile_photo = ()=>{

		let image;

		if(this.state.image_path == ''){
			image= <Image style={{width: 150, height: 150, borderRadius: 150/2, borderColor: '#fff', borderWidth: 1,}} source={require('./UI/Images/default_pic.jpg')} />;
		} else {
			image= <View style={{width: 150, height: 150, borderRadius: 150/2, backgroundColor: '#eee'}}>
				<Image style={{width: 150, height: 150, borderRadius: 150/2, borderColor: '#fff', borderWidth: 1,}} source={{uri: this.state.image_path}} defaultSource= {require('./UI/Images/default_pic.jpg')} />
			</View>;
		}

		return image;
	}


	async get_profile_photo (){
		
		//get photo here
	}


	is_valid_request(){
		valid_inputs =[this.state.image_path];
		for (var i = 0; i < valid_inputs.length; i++) {
			if(valid_inputs[i] == ''){
				return false;
			}
		}
		return true;
	}


} /// End Class