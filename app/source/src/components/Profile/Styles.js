import { StyleSheet, Dimensions } from 'react-native';
const{width, height} = Dimensions.get('window');
import {colors} from "app/constants/AppConstants"
export default StyleSheet.create({

    wrap:{
        flex: 1,
        backgroundColor: '#fff',
    },

    row_float:{
        alignItems: 'center',
        flexDirection: 'row',
    },

    box_float:{
        flex: 1,
    },

    camera_btns:{
        color: '#fff',
        fontSize: 30,
        margin: 10,
        textAlign: 'center'
    },
    preview :{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },


    row:{
        padding: 10,
        //borderBottomColor: '#333',
        //borderBottomWidth: 1,
    },

    label:{
        color: '#333',
        marginBottom: 8,
        marginTop: 15,
        fontSize: 16,
    },

    text_input:{
        color: '#333',
        fontSize: 12,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    err_msg_text:{
        color: '#ccc',
        fontSize:14,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    },
    profile_complition: {
        // backgroundColor:colors.whiteColor,
        // marginHorizontal:30,
        marginTop: 5,

        flexDirection:'row',
        justifyContent:'center',
    },

    nav_text:{
        fontSize: 15,
        //fontWeight: 'bold',
        padding :5,
        color:colors.whiteColor,
        alignItems:'center'
    },
    nav_item:{
        padding: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderBottomWidth:0.5,
        borderColor:'white',
        marginLeft:15,
        marginRight:15,
    },
    profile_edit: {

        justifyContent:'center',
        height:30,
        width:width*0.50,
        borderRadius :15,
        borderWidth:1,
        borderColor:'white',
        marginTop: 20,
        marginLeft:width*0.25,

    },
    text_link: {
        fontSize:15,
        margin: 5,
        textAlign: 'center',
        color:'white',
    },

    btn:{
        padding:15,
        //borderRadius: 3,
        alignItems: 'center',
    },

    btn_default:{
        backgroundColor: '#2c3d54',
    },

    btn_text:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    container_bg: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent: 'center',
    },
});
