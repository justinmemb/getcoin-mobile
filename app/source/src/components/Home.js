import React, { Component } from 'react';

import {
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	ScrollView,AsyncStorage,
	Dimensions,PermissionsAndroid,Platform,Animated
} from 'react-native';
import Bounceable from "react-native-bounceable";
import RootSiblings from 'react-native-root-siblings';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './UI/Styles.js';
import HomeHeader from 'app/source/src/Components/Reusable/HomeHeader'
const{width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const timeout = 4000;
let animationTimeout;
import {requestPermission} from 'react-native-android-permissions';
import Helpers from './Helpers.js';
import Notice from 'app/source/Utils/Notice'
import {GOOGLE_MAP_API_KEY,colors,ICONS} from 'app/constants/AppConstants'
import MapViewDirections from 'react-native-maps-directions';
import ModalDropdown from 'react-native-modal-dropdown';


export default class Home extends Component {

	static navigationOptions = ({ navigation }) => {
		    const { params = {} } = navigation.state;
		    return {
            tabBarVisible : true,
            navBarVisible:true,
            title:'Home',
            showIcon:true,
                showTitle:false,
                pressColor : colors.whiteColor,


                headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                    <Image source={ICONS.menu_icon} style = {styles.menu}/>

                    </TouchableOpacity>,

                headerRight: <View style = {styles.menu}>
                    {/*<Image source={ICONS.bitcoin_icon} style = {styles.menu}/>*/}
                    {/*<Text style={styles.nav_balance}>100</Text>>*/}
                </View>,

                tabBarIcon:({tintColor}) => (
                    <Image
                        source={ICONS.tab_Home_icon}
                        color={tintColor}
                        //style={CommonStyles.tabBarIcon}
                    />)

           // header:null,
		}

	};


	constructor(props){
		super(props);

		this.state = {
            user_name: 'John',
            user_city:'maxico',
            current_balence: 100,
            profile_image: 'default',
            sell_Rate : 3245,
            buy_Rate:65478,

			user_location:{
			    latitude : 34.06972,
                longitude : -118.056335,},

            otherUser1_Location:{
                latitude : 34.06978,
                longitude : -118.056335
            },

            otherUser2_Location:{
                latitude : 34.06982,
                longitude : -118.056335
            },

            otherUser3_Location:{
                latitude : 34.06990,
                longitude : -118.056335
            },

            region:{  latitude : 34.06972,
                       longitude : -118.056335,
                       latitudeDelta: LATITUDE_DELTA,
                       longitudeDelta: LONGITUDE_DELTA
			},


		};

	}


    componentDidMount(){

        /// get the user position
        if (Platform.OS ==='ios'){
            this.getUserLocation()
        }
        else{
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


	centerLizedLocation = () =>{
        this.map.fitToSuppliedMarkers(['user'], false);
        this.setState({
            region:{
                latitude : this.state.user_location.latitude,
                longitude : this.state.user_location.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
        })
    };



    /** focus the markers **/
    focusMap(markers, animated) {
        console.log(`Markers received to populate map: ${markers}`);
        this.map.fitToSuppliedMarkers(['user','other1','other2','other3'], animated);
       // this.map.fitToSuppliedMarkers(['other'], animated);

    }
    /** request location for android **/
    requestLocationPermission = async ()=> {
             await requestPermission("android.permission.ACCESS_FINE_LOCATION").then( async (result) => {

                console.log("Granted!", result);
                // now you can set the listenner to watch the user geo location
            }, (result) => {
                console.log("Not Granted!");
                console.log(result);
            });
          this.getUserLocation();
    };






    getUserLocation =() =>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                let user_location = {
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude,
                    // latitudeDelta: LATITUDE_DELTA,
                    // longitudeDelta: LONGITUDE_DELTA
                };
                this.setState({
                    user_location:{latitude:position.coords.latitude,
                        longitude:position.coords.longitude},
                    region:user_location});

            },
            (error) => {
                alert(error.message);
                let user_location = {
                    latitude : 34.06972,
                    longitude : -118.056335,
                };
                this.setState({	user_location});

            },
            {enableHighAccuracy: false,timeout: 50000, maximumAge: 5000}
           )
	};

	focusToMarkers =() =>{
		let array = []
		array.push('user');


        animationTimeout = setTimeout(() => {
            this.focusMap(array, true);

        }, timeout);
	};




/// Clicking on map will update the user location in db and marker on map
    onMapPress = async (e) =>{
        let new_coord = e.nativeEvent.coordinate
        if(new_coord === undefined || new_coord === null || !new_coord){

            return;
        }
        this.setState({user_location: {
            latitude : new_coord.latitude,
            longitude: new_coord.longitude,
        },


        });

      };

    //** render dropdown**//
    renderDropDown = () => {
        return(
            <ModalDropdown  options={['Bit Coin', 'Lit Coin']}>
            </ModalDropdown>
        );
    }

    /** Render Top Container**/

    renderTopContainer = () => {

        const dropDown = this.renderDropDown();
        return(
            <View style={styles.home_container}>
                <View style={styles.container_SubView1} >
                    {dropDown}
                </View>
                <View style={styles.container_SubView2}>
                    <Text style={styles.home_Container_Text}> SELL  ${this.state.sell_Rate}     |     BUY  ${this.state.buy_Rate} </Text>
                    <TouchableOpacity onPress={this.refresh}>
                        <Image source={ICONS.refresh_icon} style = {{ marginLeft:15, resizeMode:'contain',height:25,width:25,}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.container_SubView3}>
                    <TouchableOpacity style={styles.container_button} onPress={this.sellCrypto}>
                        <Text style={styles.home_Button_Text}> Sell Crypto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container_button1} onPress={this.buyCrypto}>
                        <Text style={styles.home_Button_Text}> Buy Crypto</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

    refresh= () =>{

        try {



        } catch (e) {
        }
    }

    buyCrypto= () =>{

        try {



        } catch (e) {
        }
    }

    sellCrypto= () =>{

        try {



        } catch (e) {
        }
    }


    /** Render Map Component **/
    renderMapComponent = () =>{

        let androidEndPoint = { right: (parseInt(width / 20)),
            bottom: (parseInt(height / 20)),
            left: (parseInt(width / 20)),
            top: (parseInt(height / 20))}
        let iosEndPoint = {right: (width / 20),
            bottom: (height / 20),
            left: (width / 20),
            top: (height / 20),  }
        const endPoints = Platform.OS === 'ios'?iosEndPoint:androidEndPoint;
        return( <MapView
            followsUserLocation={true}
            showsUserLocation={true}
            onPress={this.onMapPress}
            loadingEnabled={ true}
            provider={PROVIDER_GOOGLE}
            ref={ref => this.map = ref}
            initialRegion={{
                latitude : this.state.user_location.latitude,
                longitude : this.state.user_location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style = {{
                height: '80%',
                width: '100%'
            }}>



            {(this.state.user_location !== null)  &&  <MapView.Marker
                key ={'user'}
                identifier={'user'}
                coordinate={ this.state.user_location}
                title = {'Your Location'}
            />}


        </MapView>)
    };





    /** Render function **/
	render(){

        const TopContainer = this.renderTopContainer();

        const Map = this.renderMapComponent();
        return(


            <View style={[styles.wrap]}>

                {TopContainer}

                {Map}

            </View>
        );

	}

} /// End Class