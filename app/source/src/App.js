/** JShint
 * **/
import React, { Component } from 'react';

//SCREENS
import Landing from './Components/Landing/Landing';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import ForgotPassword from './Components/Authentication/ForgotPassword';
import ProfilePhoto from './Components/ProfilePhoto';
import Gallery from './Components/Gallery';
import TakePhoto from './Components/Profile/TakePhoto';
import EditProfile from './Components/Profile/EditProfile';
import PinVarification from "./Components/Authentication/PinVarification";
import PinConform from "./Components/Authentication/PinConform";
import Offers from "./Components/Offers";
import Message from "./Components/Message";
import Feedback from "./Components/Feedback";
import Wallet from "./Components/Wallet";
import Settings from "./Components/Settings/Settings"


//Tabs
import Home from './Components/Home';
import Profile from './Components/Profile/Profile';


/* External Components used
npm install --save react-navigation
npm install --save react-native-vector-icons
npm install --save react-native-camera
npm install --save react-native-maps
*/

import DrawerContent from './Components/UI/DrawerContent';

import{
	SwitchNavigator,
	StackNavigator,
	DrawerNavigator,
	TabNavigator,
	NavigationActions,
} from 'react-navigation';
import {colors} from "../../constants/AppConstants";



console.disableYellowBox = true;
const AuthStackNavigator = StackNavigator({
	Login:{screen: Login},
	SignUp:{screen: SignUp},
	ForgotPassword:{screen: ForgotPassword},
	PinVarification:{screen: PinVarification},
	PinConform:{screen:PinConform}

},{
	//headerMode: 'float',
	initialRouteName: 'Login',
	navigationOptions: {
		headerStyle: {backgroundColor: colors.blueColor},
		headerTintColor: '#fff',
	},
	//headerMode: 'none',
});



//Tab navigation use later
const TabNav = TabNavigator({
	Home:{screen: Home},
	Offers :{screen : Offers},
	Message:{screen : Message},
	Feedback:{screen: Feedback},
	Profile:{screen:Profile}
 },
	{
		tabBarPosition: 'bottom',
	tabBarOptions: {
		activeTintColor: colors.whiteColor,
		inactiveTintColor: '#307B87',
		pressColor : colors.whiteColor,
		showIcon: true,
		showTitle:false,
		style: {
			//backgroundColor: '#307B87',
			backgroundColor: colors.blueColor,
		},
		tabStyle:{
			paddingTop: 15
		},
		upperCaseLabel: false,
		labelStyle: {
			fontSize: 11,
		},
	},
	// Android
	//swipeEnabled: false,
	//animationEnabled: false
});


const DrawerNav = DrawerNavigator({
		Home:{screen: TabNav},

	}, {
		drawerPosition: 'left',
		drawerOpenRoute: 'DrawerOpen',
		drawerCloseRoute: 'DrawerClose',
		drawerToggleRoute: 'DrawerToggle',
		//drawerBackgroundColor: '#2a3b52',
		contentComponent: DrawerContent, // custom content
		contentOptions: {
			activeTintColor: '#627891',
			inactiveTintColor: '#444',
		},
	}
);


const AppNavigator = StackNavigator({
	Home:{screen: DrawerNav},
    Profile:{screen: Profile},
	ProfilePhoto: {screen: ProfilePhoto},
	EditProfile: {screen: EditProfile},
	Gallery: {screen: Gallery},
	TakePhoto: {screen: TakePhoto},
	Wallet:{screen:Wallet},
	Settings:{screen:Settings}

},{

	initialRouteName: 'Home',
	navigationOptions: {
		headerStyle: {backgroundColor: colors.blueColor},
		headerTintColor: '#fff',
	},
	//headerMode: 'none',
});



const MainNavigator = SwitchNavigator({
	Landing:{screen: Landing},
	Login:{screen: AuthStackNavigator},
	Home:{screen: AppNavigator},
},{
	//headerMode: 'float',
	initialRouteName: 'Landing',
	navigationOptions: {
		headerStyle: {backgroundColor: '#f13131'},
		headerTintColor: '#fff',
	},
	headerMode: 'none',
});

export default class App extends Component{

	render(){
		return(
		
			<MainNavigator ref={nav => { this.navigator = nav; }} />
		);
	}

} /// End Class