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
	ImageBackground,
    StatusBar,
    Dimensions

//	AsyncStorage,
} from 'react-native';



import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, ICONS} from "../../../../constants/AppConstants";
const{width, height} = Dimensions.get('window');


import Helpers from '../Helpers';

import styles from './Styles';

export default class Profile extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        //const { rightButton } = state.params;
        return {
            title:  'My Profile',
            tabBarVisible : true,
            navBarVisible:true,
            headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
				<Image source={ICONS.menu_icon} style = {styles.menu}/>

			</TouchableOpacity>,
            tabBarIcon:
				<Image
					source={ICONS.userProfile}
					//style={CommonStyles.tabBarIcon}
				/>
		}
    };

	constructor(props){
		super(props);
		this.state = {
			user_Name: 'John',
			email: 'j@j.com',
			language:'English',
			user_mobile: '0123456789',
			user_location:'Maxico',
			profile_image: 'default',
			acc_created_Date:'19-5-2018',

			profile_complition_update :50,

            loaded: false,
			err_msg: '',
		};
	}


	componentDidMount(){
		const{params} = this.props.navigation.state;

		this.get_profile_info();
	}


	render(){

		return(

			<ImageBackground style={[styles.container_bg]} source = {ICONS.bgImage}>

				<StatusBar
					//backgroundColor="#fff"
					barStyle="light-content"
				/>


				<ScrollView>

					<View style={[styles.row, {alignItems: 'center'}]}>
						{this.render_profile_photo()}

						<View style={styles.profile_complition}>
							<Image source={ICONS.profile_thumb} style = {{resizeMode:'contain',height:30,width:30,}}/>
							<Text style={styles.nav_text}>{this.state.profile_complition_update}%</Text>
						</View>

						{/*<TouchableOpacity onPress={this.goto_profile_photo}>*/}
							{/*<Text style={styles.text_link}>Change profile photo</Text>*/}
						{/*</TouchableOpacity>*/}
					</View>


					<View style={styles.row}>

						<View style={styles.nav_item}>
							<Image source={ICONS.userProfile} style = {{resizeMode:'contain',height:30,width:30,}}/>
							<Text style={styles.nav_text}>{this.state.user_Name}</Text>
						</View>

						<View style={styles.nav_item}>
							<Image source={ICONS.emailImage} style = {{resizeMode:'contain',height:30,width:30,}}/>
							<Text style={styles.nav_text}>{this.state.email}</Text>
						</View>

						<View style={styles.nav_item}>
							<Image source={ICONS.phoneImage} style = {{resizeMode:'contain',height:30,width:30,}}/>
							<Text style={styles.nav_text}>{this.state.user_mobile}</Text>
						</View>

						<View style={styles.nav_item}>
							<Image source={ICONS.languageImage} style = {{resizeMode:'contain',height:30,width:30,}}/>
							<Text style={styles.nav_text}>{this.state.language}</Text>
						</View>

						<View style={styles.nav_item}>
							<Image source={ICONS.locationImage} style = {{resizeMode:'contain',height:30,width:30,}}/>
							<Text style={styles.nav_text}>{this.state.user_location}</Text>
						</View>

						<View style={styles.nav_item}>
							<Image source={ICONS.date_icon} style = {{resizeMode:'contain',height:30,width:30,}}/>
							<Text style={styles.nav_text}>{this.state.acc_created_Date}</Text>
						</View>

						<TouchableOpacity style={styles.nav_item} onPress={this.setting}>
							<Image source={ICONS.profile_offers_icon} style = {{resizeMode:'contain',height:25,width:25,}}/>
							<Text style={styles.nav_text}>Accepted Offers</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.nav_item} onPress={this.setting}>
							<Image source={ICONS.profile_created_offers} style = {{resizeMode:'contain',height:25,width:25,}}/>
							<Text style={styles.nav_text}>Created Offers</Text>
						</TouchableOpacity>




					</View>

					<TouchableOpacity style={styles.profile_edit} onPress={()=>{Helpers.redirect('EditProfile', this.props.navigation)}}>
						<Text style={styles.text_link}>Update Profile</Text>
					</TouchableOpacity>

				</ScrollView>


			</ImageBackground>

		);
	}


	render_profile_photo = ()=>{

		let image;

		if(this.state.profile_image == 'default'){
			image= <Image style={{width:height*0.14 , height: height*0.14, borderRadius: height*0.07, }} source={require('../UI/Images/default_pic.jpg')} />;
		} else {
			image= <View style={{width:height*0.14 , height: height*0.14, borderRadius: height*0.07, backgroundColor: 'transparent'}}>
				<Image style={{width:height*0.14 , height: height*0.14, borderRadius: height*0.07}} source={{uri: this.state.profile_image}} defaultSource= {require('../UI/Images/default_pic.jpg')} />
			</View>;
		}

		return image;
	}


	async get_profile_info(){

		/// Get data here
	}


	goto_profile_photo = ()=>{
		var options = {
			image_path: '',
		};
		this.props.navigation.navigate('ProfilePhoto', options);
	}


} /// End Class