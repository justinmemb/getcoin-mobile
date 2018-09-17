import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	AsyncStorage,
	Image
} from 'react-native';

import {
    NavigationActions, 
    DrawerItems, 
    DrawerNavigation, 
    SafeAreaView 
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, ICONS } from "../../../../constants/AppConstants";

export default class DrawerContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_name: 'John',
            user_city: 'maxico',
            current_balence: 100,
            profile_image: 'default',
            loaded: 'false',
        };
    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.header}>
                        <View style={styles.container1}>
                            <Image source={ICONS.userProfile} style={{resizeMode: 'contain', height: 50, width: 50,}} />
                            <View style={styles.container2}>
                                <Text style={styles.nav_text}>{this.state.user_name}</Text>
                                <View style={styleMedia.container3}>
                                    <Image source={ICONS.locationImage} style={{resizeMode: 'contain', height: 20, width: 20,}} />
                                    <Text style={styles.copyright}>{this.state.user_city}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container4}>
                            <Text style={styles.copyright}>Available balance: </Text>
                            <Image source={ICONS.bitcoin_icon} style={{resizeMode: 'contain', height: 20, width: 20,}} />

                            <Text style={styles.balance_text}>{this.state.current_balence}</Text>
                            <TouchableOpacity onPress={this.addCoin}>
                                <Text style={styles.balance_text}> +</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                    <TouchableOpacity style={styles.nav_item} onPress={this.home}>
                        <Image source={ICONS.tab_Home_icon} style={{resizeMode: 'contain', height: 25, width: 25,}} />
                        <Text style={styles.nav_text}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav_item} onPress={this.activeDeals}>
                        <Image source={ICONS.activeDealsImage} style={{resizeMode: 'contain', height: 25, width: 25,}} />
                        <Text style={styles.nav_text}>Active Deals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav_item} onPress={this.wallet}>
                        <Image source={ICONS.walletImage} style={{resizeMode: 'contain', height: 25, width: 25,}} />
                        <Text style={styles.nav_text}>Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav_item} onPress={this.transactionHistory}>
                        <Image source={ICONS.transactionHistory} style={{resizeMode: 'contain', height: 25, width: 25,}} />
                        <Text style={styles.nav_text}>Transaction Transaction History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav_item} onPress={this.createOffer}>
                        <Image source={ICONS.createOffers} style={{resizeMode: 'contain', height: 25, width: 25,}} />
                        <Text style={styles.nav_text}>Create Offer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav_item} onPress={this.feedback}>
                        <Image source={ICONS.feedback} style={{resizeMode: 'contain', height: 25, width: 25}} />
                        <Text style={styles.nav_text}>Feedback</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav_item} onPress={this.setting}>
                        <Image source={ICONS.setting} style={{resizeMode: 'contain', height: 25, width: 25,}} />
                        <Text style={styles.nav_text}>Setting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav_item1} onPress={this.logout}>
                        <Image source={ICONS.logout} style={{resizeMode: 'contain', height: 25, width: 25,}} />
                        <Text style={styles.nav_text}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.footer}>
                        
                    </View>
                </View>
            </View>
        );
    }

    logout = () => {
        try  {
            return this.props.navigation.navigate('Login');
        } 
        catch (e) {
            alert('Some problem ' + e.messsage);
        }
    }

    addCoin = () => {
        try {

        } 
        catch (e) {

        }
    }

    home = () => {
        return this.props.navigation.navigate('Home');
    }

    activeDeals = () => {
        return this.props.navigation.navigate('ActiveDeals');
    }

    wallet = () => {
        return this.props.navigation.navigate('Wallet');
    }

    transactionHistory = () => {
        return this.props.navigation.navigate('TransactionHistory');
    }

    createOffer = () => {
        try {
            return this.props.navigation.navigate('CreateOffers');
        }
        catch (e) {

        };
    }

    feedback = () => {
        return this.props.navigation.navigate('Feedback');
    }

    setting = () => {   
        return this.props.navigation.navigate('Settings');
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.blueColor,
    },

    header: {
        padding: 10,
        backgroundColor: colors.blueColor,
    },

    container1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 60,
        borderBottomWidth: 0.5,
        borderColor: 'white',
        marginRight: 20,
        marginLeft: 20,
    },

    container2: {
        padding: 5,
    },

    container3: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    container4: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 5,
        marginLeft: 40,
    },

    separator: {
        backgroundColor: colors.whiteColor,
        height: 0.3,
    },

    app_heading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    nav_item: {
        padding: 10,
        backgroundColor: colors.blueColor,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: 'white',
        marginLeft: 15,
        marginRight: 15,
    },

    nav_item1: {
        padding: 10,
        backgroundColor: colors.blueColor,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },

    nav_text: {
        fontSize: 15,
        padding: 5,
        color: colors.whiteColor,
    },

    activeDealsIcon: {
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: colors.whiteColor,
        justifyContent: 'center',
        height: 18,
        width: 18,
        color: colors.whiteColor,
        borderRadius: 18/2,
    },

    balance_text: {
        fontSize: 15,
        color:  colors.whiteColor,
    },

    nav_text1: {
        fontSize: 10,
        padding: 0,
        color: colors.whiteColor,
    },

    copyright: {
        color: colors.whiteColor,
    },

    footer: {
        padding: 30,
        backgroundColor: colors.blueColor,
    },
})
