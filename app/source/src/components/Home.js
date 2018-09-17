import React, { Component } from 'react';
import {
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    ScrollView,
    AsyncStorage,
    Dimensions,
    PermissionsAndroid,
    Platform,
    Animated,
} from 'react-native';

import Bounceable from 'react-native-bounceable';
import RootSiblings from 'react-native-root-siblings';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './UI/Styles.js';
import HomeHeader from 'app/source/src/Components/Reusable/HomeHeader';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const timeout = 4000;

let animationTimeout;

import { requestPermission } from 'react-native-android-permissions';

import Helpers from './Helper';
import Notice from 'app/source/utilities/Notice';
import { GOOGLE_MAP_API_KEY, colors, ICONS } from 'app/constants/AppConstants';

import MapViewDirections from 'react-native-maps-directions';
import ModalDropDown from 'react-native-modal-dropdown';

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            tabBarVisible: true,
            navBarVisible: true,
            title: 'Home',
            showIcon: true,
            showTitle: false,
            pressColor: colors.whiteColor,
            headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Image source={ICONS.menu_icon} style={styles.menu} />
            </TouchableOpacity>,

            headerRight: <View style={styles.menu}>
                <Image source={ICONS.bitcoin_icon} style={styles.menu} />
                <Text style={styles.nav_balance}>100</Text>
            </View>,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={ICONS.tab_Home_icon}
                    color={tintColor} />
            )
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            user_name: 'John',
            user_city: 'mexico',
            current_balance: 100,
            profile_image: 'default',
            sell_Rate: 3245,
            buy_Rate: 65478,
            coins: [{title: 'Bitcoin', image: ICONS.cash_icon}, {title: 'LiteCoin', image: ICONS.cash_icon}, {title: 'TronCoin', image: ICONS.cash_icon}],
            user_location: {
                latitude: 34.06972,
                longitude: -118.056335,
            },
            other_user_location: {
                latitude: 35.06972,
                longitude: -118.056335,
            },
            region: {
                latitude: 34.06972,
                longitude: -118.056335,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            region1: {
                latitude: 34.06972,
                longitude: -118.056335,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.getUserLocation()
        }
        else {
            this.requestLocationPermission();
        }

        animationTimeout = setTimeout(() => {
            this.focusToMarkers();
        }, timeout);
    }

    componentWillUnmount() {
        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }
    }

    centerLizedLocation = () => {
        this.map.fitToSuppliedMarkers(['user'], false);
        this.map.fitToSuppliedMarkers(['other'], false);

        this.setState({
            region: {
                latitude: this.state.user_location.latitude,
                longitude: this.state.user_location.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        })
    };

    focusMap(markers, animated) {
        console.log('Markers received to populate map: ${markers}');

        this.map.fitToSuppliedMarkers(['user'], animated);
        this.map.fitToSuppliedMarkers(['other'], animated);
    }

    requestLocationPermission = async() => {
        await requestPermission("android.permission.ACCESS_FINE_LOCATION")
              .then(async(result) => {
                  console.log("Granted!", result);
              }, (result) => {
                  console.log("Not Granted!");
                  console.log(result);
              });
        
        this.getUserLocation();
    };

    getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let user_location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                this.setState({
                    user_location: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                    region: user_location
                });
            },
            (error) => {
                alert(error.message);

                let user_location = {
                    latitude: 34.06972,
                    longitude: -118.056335,
                };
                this.setState({ user_location });
            },
            {
                enableHighAccuracy: false,
                timeout: 50000,
                maximumAge: 5000,
            }
        )
    };

    focusToMarkers = () => {
        let array = [];

        array.push('user');

        animationTimeout = setTimeout(() => {
            this.focusMap(array, true);
        }, timeout);
    };

    onMapPress = async (e) => {
        let new_coord = e.nativeEvent.coordinate;

        if (new_coord === undefined || new_coord === null || !new_coord) {
            return ;
        }
        this.setState({user_location: {
            latitude: new_coord.latitude,
            longitude: new_coord.longitude,
        },});
    };

    renderRow = (item) => {
        return(
            <View style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: colors.blueColor
            }}>
                <Image source={item.image} style={{width: 20, height: 20}} />
                <Text style={{color: 'white', textAlign: 'center'}}>{item.title}</Text>
            </View>
        )
    };

    renderDropDown = () => {
        return(
            <ModalDropDown style={{backgroundColor: colors.blueColor}} dropdownTextStyle={{color: 'white'}} options={this.state.coins} renderRow={this.renderRow}>
            </ModalDropDown>
        )
    }

    renderTopContainer = () => {
        const dropDown = this.renderDropDown();

        return(
            <View style={styles.home_container}>
                <View style={styles.container_SubView1}>
                    {dropDown}
                </View>
                <View style={styles.container_SubView2}>
                    <Text style={styles.home_Container_Text}>SELL ${this.state.sell_Rate} | BUY ${this.state.buy_Rate}</Text>
                    <TouchableOpacity onPress={this.refresh}>
                        <Image source={ICONS.refresh_icon} style={{marginLeft: 15, resizeMode: 'contain', height: 25, width: 25,}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.container_SubView3}>
                    <TouchableOpacity style={styles.container_button} onPress={this.sellCrypto}>
                        <Text style={styles.home_Button_Text}>Sell Crypto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container_button1} onPress={this.buyCrypto}>
                        <Text style={styles.home_Button_Text}>Buy Crypto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    refresh = () => {

    }

    buyCrypto = () => {
        Helpers.redirect('BuyCrypto', this.props.navigation);
    }

    sellCrypto = () => {
        Helpers.redirect('SellCrypto', this.props.navigation);
    }

    /**
     * Render Map Component
     */

    renderMapComponent = () => {
        let androidEndPoint = { 
            right: (parseInt(width/20)), 
            bottom: (parseInt(height/20)),
            left: (parseInt(width/20)),
            top: (parseInt(height/20)),
        };

        let iosEndPoint = {
            right: (width/20),
            bottom: (height/20),
            left: (width/20),
            top: (height/20),
        };

        const endPoints = Platform.OS === 'ios' ? iosEndPoint : androidEndPoint;
        const {locations} = {
            location_id: 'aaaa',
            location: {
                latitude: 36.06972,
                longitude: -118.056335,
            }
        }

        return(
            <MapView
                followsUserLocation={true}
                showsUserLocation={true}
                onPress={this.onMapPress}
                loadingEnabled={true}
                provider={PROVIDER_GOOGLE}
                ref={ref => this.map = ref}
                initialRegion={{
                    latitude: this.state.user_location.latitude,
                    longitude: this.state.user_location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{
                    height: '80%',
                    weight: '100%',
                }}>
                    {(this.state.user_location !== null) && <MapView.Marker
                        key = {'user'}
                        identifier={'user'}
                        coordinate={this.state.user_location}
                        title={'Your Location'}
                    />}
                </MapView>
        )
    }

    render() {
        const TopContainer = this.renderTopContainer();
        const Map = this.renderMapComponent();

        return(
            <View style={[styles.wrap]}>
                {TopContainer}
                {Map}
            </View>
        );
    }
}