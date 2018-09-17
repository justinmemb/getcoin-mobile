/**
 * App.js
 */

import React, { Component } from 'react';

//SCREENS
import Landing            from './components/Landing/Landing';
import Login              from './components/Authentication/Login';
import SignUp             from './components/Authentication/SignUp';
import ForgotPassword     from './components/Authentication/ForgotPassword';
import PinVerification    from './components/Authentication/PinValidation';
import PinConfirm         from './components/Authentication/PinConfirm';

import ProfilePhoto       from './components/ProfilePhoto';
import Gallery            from './components/Gallery';
import TakePhoto          from './components/Profile/TakePhoto';
import EditProfile        from './components/Profile/EditProfile';

import Offers             from './components/Offers';
import CreateOffers       from './components/CreateOffers';
import Message            from './components/Message';
import Chat               from './components/Chat';
import Feedback           from './components/Feedback';
import Wallet             from './components/Wallet';
import Settings           from './components/Settings/Settings';

import SellCrypto         from './components/SellCrypto';
import BuyCrypto          from './components/BuyCrypto';
import ActiveDeals        from './components/ActiveDeals';
import TransactionHistory from './components/TransactionHistory';

import Home               from './components/Home';
import Profile            from './components/Profile/Profile';

/**
 * External Components used
 *      npm install --save react-navigation
 *      npm install --save react-native-vector-icons
 *      npm install --save react-native-camera
 *      npm install --save react-native-maps
 */

import DrawerContent from './components/UI/DrawerContent';
import { colors } from 'react-native-elements';

console.disableYellowBox = true;

const AuthStackNavigator = StackNavigator ({
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    ForgotPassword: {screen: ForgotPassword},
    PinVerification: {screen: PinVerification},
    PinConfirm: {screen: PinConfirm}
},  {
    // headerMode: 'float',
    initialRouteName: 'Login',
    navigationOptions: {
        headerStyle: {backgroundColor: colors.blueColor},
        headerTintColor: '#fff',
    },
    // headerMode: 'none',
});

// Tab navigation use later
const TabNav = TabNavigator ({
    Home: {screen: Home},
    Offers: {screen: Offers},
    Message: {screen, Message},
    Feedback: {screen: Feedback},
    Profile: {screen, Profile}
},  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: colors.whiteColor,
        inactiveTintColor: '#307B87',
        pressColor: colors.whiteColor,
        showIcon: true,
        showTitle: false,
        style: {
            // backgroundColor: '#307B87',
            backgroundColor: colors.blueColor,
        },
        tabStyle: {
            paddingTop: 15,
        },
        upperCaseLabel: false,
        labelStyle: {
            fontSize: 11,
        },
    },

    // Android
    // swipeEnabled: false,
    // animationEnabled: false,
});

const DrawerNav = DrawerNavigator ({
    Home: {screen: TabNav},
},  {
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: '#2a3b52',
    contentComponent: DrawerContent,        // custom content
    contentOptions: {
        activeTintColor: '#627891',
        inactiveTintColor: '#444',
    },
});

const AppNavigator = StackNavigator ({
    Home: {screen: DrawerNav},
    Profile: {screen: Profile},
    ProfilePhoto: {screen: ProfilePhoto},
    EditProfile: {screen, EditProfile},
    Gallery: {screen:  Gallery},
    TakePhoto: {screen: TakePhoto},
    Wallet: {screen: Wallet},
    Settings: {screen: Settings},
    SellCrypto: {screen: SellCrypto},
    BuyCrypto: {screen: BuyCrypto},
    ActiveDeals: {screen: ActiveDeals},
    TransactionHistory: {screen: TransactionHistory},
    CreateOffers: {screen: CreateOffers},
    Chat: {screen: Chat},
},  {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {backgroundColor: colors.blueColor},
        headerTintColor: '#fff',
    },
    // headerMode: 'none',
});

const MainNavigator = SwitchNavigator ({
    Landing: {screen: Landing},
    Login: {screen: AuthStackNavigator},
    Home: {screen: AppNavigator},
},  {
    // headerMode: 'none',
    initialRouteName: 'Landing',
    navigationOptions: {
        headerStyle: {backgroundColor: '#f13131'},
        headerTintColor: '#fff',
    },

    headerMode: 'none',
});

export default class App extends Component {
    
    render() {
        return (
            <MainNavigator ref={nav => { this.navigator = nav; }} />
        );
    }
}
