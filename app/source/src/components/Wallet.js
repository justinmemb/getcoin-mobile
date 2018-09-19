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

import styles from './UI/Styles.js';
import ServiceApi from '../../Utils/ServiceApi/index'
import Notice from '../../Utils/Notice';
import AuthButton from "./Reusable/AuthButton";
import {colors, ICONS} from "../../../constants/AppConstants";
import DeviceUtils from "../../Utils/DeviceUtils";
import AuthInput from './Reusable/AuthInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Helpers from './Helpers'

export default class Wallet extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        //const { rightButton } = state.params;
        return {
            // headerLeft: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            //     <Image source={ICONS.menu_icon} style = {styles.menu}/>
            //
            // </TouchableOpacity>,
            title:  'Wallet',
        }
    };
    constructor(props){
        super(props);
        this.state = {
            es_address: 250045,
            es_balance: 100,
            deposit_Btn_color : colors.whiteColor,
            withdrawal_Btn_color : 'transparent',
            dispute_Btn_color : 'transparent',
            deposit_Text_color : colors.blueColor,
            withdrawal_Text_color : colors.whiteColor,
            dispute_Text_color : colors.whiteColor,
            amount: '100',
            placeHolder:'Enter Amount',
            submit_btn_title :'Deposit'



        };
    }

    render(){

        return(

            <ImageBackground style={[styles.container_bg]} source = {ICONS.bgImage}>

                <StatusBar
                    //backgroundColor="#fff"
                    barStyle="light-content"
                />

                < KeyboardAwareScrollView >
                    <View style={styles.container_center}>
                        <View style = {{flex:0,
                            alignItems:'center',
                            justifyContent:'center',height:150 ,
                            width:DeviceUtils.screen.width,
                            marginBottom:20
                            }}>
                            <Image source={ICONS.logoImage} style = {{resizeMode:'contain',height:200,width:200,}}/>
                        </View>

                        <View style = {{flex:1,
                            alignItems:'center',
                           // justifyContent:'center',
                            width:DeviceUtils.screen.width-40,
                            height:60,
                            borderBottomWidth:0.5,
                            borderBottomColor:colors.whiteColor,
                            marginLeft:20,
                            marginRight:20
                        }}>

                            <View style = {{
                                flexDirection:'row',
                                alignItems:'flex-start',
                                }}>
                                <Text style={styles.text_escrew}>Escrew Address:</Text>
                                <Text style={styles.text_escrew}>{this.state.es_address}</Text>

                            </View>

                            <View style = {{
                                flexDirection:'row',
                                alignItems:'flex-start',
                            }}>
                                <Text style={styles.text_escrew}>Escrew Balance:</Text>
                                <Text style={styles.text_escrew}>${this.state.es_balance}</Text>

                            </View>

                        </View>

                        <View style = {{
                            flexDirection:'row',
                            alignItems:'flex-start',
                            marginBottom:30,
                            marginTop:10,
                            width:DeviceUtils.screen.width,

                        }}>


                            <TouchableOpacity style = {[styles.segment_button,{marginLeft:DeviceUtils.screen.width * 0.075,
                                backgroundColor:this.state.deposit_Btn_color}]
                            }  onPress={this.deposit}>
                                <View >
                                    <Text style={[styles.text_link1,{color:this.state.deposit_Text_color}]}>Deposit</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {[styles.segment_button,{marginLeft:DeviceUtils.screen.width * 0.05,
                                backgroundColor:this.state.withdrawal_Btn_color}]
                            }  onPress={this.withdrawal}>
                                <View >
                                    <Text style={[styles.text_link1,{color:this.state.withdrawal_Text_color,paddingHorizontal:2}]}>Withdrol</Text>
                                </View>
                            </TouchableOpacity >

                            <TouchableOpacity style = {[styles.segment_button,{marginLeft:DeviceUtils.screen.width * 0.05,
                                backgroundColor:this.state.dispute_Btn_color}]
                            } onPress={this.dispute}>
                                <View >
                                    <Text style={[styles.text_link1,{color:this.state.dispute_Text_color}]}>Despute</Text>
                                </View>
                            </TouchableOpacity>
                        </View>




                        <AuthInput
                            onSubmitEditing={Keyboard.dismiss}
                            //style={styles.text_input_white}
                            underlineColorAndroid='transparent'
                            onChangeText= {(text) => this.setState({amount: text}) }
                            value={this.state.amount}
                            placeholder= 'Enter Amount'
                            maxLength = {10}
                            leftImage = {ICONS.doller_icon}
                            keyboardType = 'number-pad'
                           // fromSearch = {true}
                        />

                        <View style = {{
                            flexDirection:'row',
                            alignItems:'center',
                            marginBottom:20,
                            marginTop:10,
                            width:DeviceUtils.screen.width,


                        }}>

                            <TouchableOpacity style = {[styles.segment_button,{marginLeft:DeviceUtils.screen.width * 0.075}]
                            }  onPress={this.plusFIfty}>
                                <View >
                                    <Text style={styles.text_link1}>+ $50</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style = {[styles.segment_button,{marginLeft:DeviceUtils.screen.width * 0.05}]
                            }  onPress={this.plusFiveHundred()}>
                                <View >
                                    <Text style={styles.text_link1}>+ $500</Text>
                                </View>
                            </TouchableOpacity >

                            <TouchableOpacity style = {[styles.segment_button,{marginLeft:DeviceUtils.screen.width * 0.05}]
                            } onPress={this.plusOneThausand()}>
                                <View >
                                    <Text style={styles.text_link1}>+ $1000</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style = {{

                            alignItems:'flex-start',

                            marginBottom:20,
                            marginTop:10,

                        }}>
                        <AuthButton primary onPress={this.submitForm.bind(this)} loading={this.state.isRequesting}>{this.state.submit_btn_title}</AuthButton>

                        </View>
                        <Text style={styles.err_msg_text}>{this.state.err_msg}</Text>

                    </View>
                </KeyboardAwareScrollView >

            </ImageBackground>
        );
    }

    async submitForm() {

        // if(this.state.email === '' || this.state.pass === ''){
        //   Notice.toast('Email & Password is required');
        // 	return;
        // }
        //

      //  Helpers.redirect('PinConform', this.props.navigation);
    }


    withdrawal= () =>{

        this.setState({deposit_Btn_color:'transparent',
            withdrawal_Btn_color : colors.whiteColor,
            dispute_Btn_color : 'transparent',
            deposit_Text_color : colors.whiteColor,
            withdrawal_Text_color : colors.blueColor,
            dispute_Text_color : colors.whiteColor,
            submit_btn_title:'Withdrawal'

        });


    }
    deposit= () =>{

        this.setState({deposit_Btn_color:colors.whiteColor,
            withdrawal_Btn_color : 'transparent',
            dispute_Btn_color : 'transparent',
            deposit_Text_color : colors.blueColor,
            withdrawal_Text_color : colors.whiteColor,
            dispute_Text_color : colors.whiteColor,
            submit_btn_title:'Deposit'

        });

    }
    dispute= () =>{

        this.setState({deposit_Btn_color:'transparent',
            withdrawal_Btn_color : 'transparent',
            dispute_Btn_color : colors.whiteColor,
            deposit_Text_color : colors.whiteColor,
            withdrawal_Text_color : colors.whiteColor,
            dispute_Text_color : colors.blueColor,
            submit_btn_title:'Dispute'
        });


    }
    plusFIfty=()=>{
        this.setState({
            amount : '50',
        });

    }
    plusFiveHundred=()=>{

        // this.setState({
        //     amount : '500',
        //     placeHolder:''
        // });
    }
    plusOneThausand=()=>{

        // this.setState({
        //     amount : '1000',
        //     placeHolder:''
        // });
    }
}