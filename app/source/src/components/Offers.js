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
    Dimensions,
    View,
    AsyncStorage,
    Image,
    ImageBackground,
    ListView,
    FlatList,
} from 'react-native';

import ServiceApi from '../../utilities/serviceapi/index';
import Notice from '../../utilities/Notice';
import AuthButton from './Reusable/AuthButton';
import {colors, ICONS} from '../../../constants/AppConstants';
import DeviceUtils from '../../utilities/DeviceUtilities';
import AuthInput from './Reusable/AuthInput';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Helpers from './Helper';
import styles from './UI/Styles';

const list = [

]

export default class Offers extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            tabBarVisible: true,
            navBarVisible: true,
            title: 'Offers',
            headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Image source={ICONS.menu_icon} style={styles.menu} />
            </TouchableOpacity>,
            tabBarIcon: 
                <Image source={ICONS.tab_offer_icon} />
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [
                {
                    "offerType": "sell 1 BTC",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "offerType": "sell 1 BTC",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "offerType": "sell 1 BTC",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "offerType": "sell 1 BTC",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "offerType": "sell 1 BTC",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "offerType": "sell 1 BTC",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
            ]
        };
    }

    componentDidMount() {
        const url = "";

        fetch(url)
            .then((response) => response.json())
            .then((response)=>{

            })
            .catch((error)=>{
                console.log(error)
            })
    }

    renderCell = ({item}) => {
        return (
            <View style={cellStyles.container}>
                <View style={cellStyles.imageBase}>
                    <View style={cellStyles.imageBase1}>
                        <Image
                            style={{width: 30, height: 30, marginLeft: 2}}
                            source={ICONS.userProfile}
                        />
                    </View>
                </View>
                <View style={cellStyles.container2}>
                    <View>
                        <Text style={cellStyles.other_Text}>{item.offerType}</Text>
                    </View>
                    <View style={cellStyles.container1}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={cellStyles.other_Text}>Quantity: B{item.coinQuantity}</Text>
                        </View>
                        <View>
                            <Text style={cellStyles.other_Text}>Exchange</Text>
                        </View>
                    </View>
                    <View style={cellStyles.buttonBase}>
                        <TouchableOpacity style={cellStyles.decline_button} onPress={this.buyButtonTapped}>
                            <View>
                                <Text style={cellStyles.text_link1}>Decline</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={cellStyles.success_button} onPress={this.buyButtonTapped}>
                            <View>
                                <Text style={cellStyles.text_link1}>Success</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ImageBackground style={[styles.container_bg]} source={ICONS.bgImage}>
                <StatusBar barStyle="light-content" />
                <FlatList
                    data = {this.state.dataSource}
                    renderItem={this.renderCell}
                />
            </ImageBackground>
        );
    }

    buyButtonTapped = () => {
        
    }
}

const {width, height} = Dimensions.get('window');

const cellStyles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: height*0.2,
        borderRadius: 15,
    },
    
    imageBase: {
        justifyContent: 'center',
        margin: 10,
    },
    
    container2: {
        justifyContent: 'center',
        margin: 10,
    },
    
    imageBase1: {
        justifyContent: 'center',
        height: 40,
        width: 40,
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.blueColor,
        margin: 5,
    },

    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },

    buttonBase: {
        flexDirection: 'row',
    },

    success_button: {
        marginTop: 10,
        justifyContent: 'center',
        height: 25,
        width: width*0.25,
        borderRadius: 12.5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginLeft: DeviceUtils.screen.width*0.15,
    },

    decline_button: {
        marginTop: 10,
        justifyContent: 'center',
        height: 25,
        width: width*0.25,
        borderRadius: 12.5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },

    other_Text: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },

    description_Text: {
        color: 'white',
        fontSize: 12,
        width: width*0.75,
    },

    time_Text: {
        marginTop: 5,
        color: 'white',
        fontSize: 10,
    },

    time_Text1: {
        color: 'white',
        fontSize: 10,
    },

    text_link1: {
        fontSize: 12,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'white',
    },
})