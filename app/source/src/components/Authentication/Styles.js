import { StyleSheet, Dimensions } from 'react-native';
const{width, height} = Dimensions.get('window');
import {colors} from "app/constants/AppConstants"
export default StyleSheet.create({
    container_center:{
        marginTop: 30,
        //margin: 30,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15,

    },

    text_link: {
        fontSize:15,
        margin: 5,
        textAlign: 'center',
        color:'white',
    },

    text_link1:{
        fontSize:15,
        textAlign: 'center',
        color:colors.whiteColor,

    },
    text_discription: {
        fontSize:15,
        margin: 5,
        textAlign: 'center',
        color:'white',
    },
    err_msg_text:{
        color: '#ccc',
        fontSize:14,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    },
    heading_title: {
        marginTop:0,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
    },
    container_bg: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent: 'center',
    },
    wrap: {
        flex: 1,
        backgroundColor: '#fff',
    },
});