import { StyleSheet, Dimensions } from 'react-native';
const{width, height} = Dimensions.get('window');
import {colors} from "app/constants/AppConstants"
export default StyleSheet.create({
    container_bg: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent: 'center',
    },
    app_heading:{
        textAlign: 'center',
        color: '#fff',
        marginBottom: 50,
        fontSize: 42,
        fontWeight: 'bold'
    },


    },
});