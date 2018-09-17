import React, { Component } from 'react';
import {
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Text,
    View,
    AsyncStorage,
    Image,
    ImageBackground,
    Dimensions,
    FlatList,
} from 'react-native';

import styles from './UI/Styles';
import ServiceApi from '../../utilities/serviceapi/index';
import Notice from '../../utilities/Notice';
import AuthButton from './Reusable/AuthButton';
import { colors, ICONS } from '../../../constants/AppConstants';
import DeviceUtils from '../../utilities/DeviceUtilities';
import AuthInput from './Reusable/AuthInput';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Helpers from './Helper';
import { Badge } from 'react-native-elements';

export default class Message extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            tabBarVisible: true,
            navBarVisible: true,
            title: 'Message',
            headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Image source={ICONS.menu_icon} style={styles.menu} />
            </TouchableOpacity>,
            tabBarIcon: <Image source={ICONS.emailImage} />
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [
                {
                    "userName": 'User_1',
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "userName": "User_2",
                    "coinQuantity": "20",
                    "feedbackScore": "70",
                    "description": "Lorem ipsum",
                },
                {
                    "userName": "User_3",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "userName": "User_3",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "userName": "User_3",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
                {
                    "userName": "User_3",
                    "coinQuantity": "20",
                    "description": "Lorem ipsum",
                },
            ]
        };
    }

    navigateTo = () => {
        Helpers.redirect('Chat', this.props.navigation);
    }

    renderCell = (item) => {    
        return (
            <TouchableOpacity style={cellStyles.container} onPress = {this.navigateTo}>
                <View style={cellStyles.imageBase}>
                    <View style={cellStyles.imageBase1}>
                        <Image
                            style={{width: 50, height: 50, marginLeft: 2, resizeMode: 'contain'}}
                            source={ICONS.userProfile}
                        />
                    </View>
                </View>
                <View style={cellStyles.container2}>
                    <View style={cellStyles.container1}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={cellStyles.other_Text}>{item.userName}</Text>
                        </View>
                        <View>
                            <Text style={cellStyles.other_Text}>10:15 PM</Text>
                            <Badge
                                value={3}
                                textStyle={{ color: 'blue' }}
                                style={{backgroundColor: 'white'}} 
                                backgroundColor={'white'}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={cellStyles.description_Text}>Hello Tim How are you lets me meet at.</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return(
            <ImageBackground style={[styles.container_bg]} source={ICONS.bgImage}>
                <StatusBar barStyle="light-content"/>
            </ImageBackground>
            <FlatList
                data={this.state.dataSource}
                renderItem={this.renderCell}
            />
        );  
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
        paddingHorizontal: 10,
    },

    imageBase: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    container2: {
        justifyContent: 'center',
        margin: 10,
    },

    imageBase1: {   
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: colors.blueColor,
        margin: 5,
    },

    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
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
        marinTop: 10,
        justifyContent: 'center',
        height: 25,
        width: width*0.25,
        borderRadius: 12.5,
        backgroundColor: 'rgba(255,255, 255, 0.2)',
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

