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
    nav_item:{
        padding: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderBottomWidth:0.5,
        borderColor:'white',
        marginLeft:15,
        marginRight:15,
        marginTop:10,


    },
    nav_item1:{
        padding: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderBottomWidth:0.5,
        borderColor:'white',
        marginLeft:15,
        marginRight:15,
        marginTop:25,

    },

    nav_text:{
        fontSize: 15,
        //fontWeight: 'bold',
        padding :5,
        color:colors.whiteColor,
        alignItems:'center'
    },

    container_bg: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent: 'center',
    },
});