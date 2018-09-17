import {
    StyleSheet,
    Dimensions
} from 'react-native';

import { colors } from "app/constants/AppConstants";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    wrap: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    row_float: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    box_float: {
        flex: 1,
    },

    camera_btns: {
        color: '#fff',
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
    },

    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    row: {
        padding: 10,
    },

    label: {
        color: '#333',
        marginBottom: 8,
        marginTop: 15,
        fontSize: 16,
    },

    textInput: {
        color: '#333',
        fontSize: 12,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    err_msg_text: {
        color: '#ccc',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    },

    profile_complition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    nav_text: {
        fontSize: 15,
        padding: 5,
        color: colors.whiteColor,
        alignItems: 'center',
    },

    nav_item: {
        padding: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: 'white',
        marginLeft: 15,
        marginRight: 15,
    },

    profile_edit: {
        justifyContent: 'center',
        height: 30,
        width: width/2,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
        marginLeft: width/4,
    },

    text_link: {
        fontSize: 15,
        margin: 5,
        textAlign: 'center',
        color: 'white',
    },

    btn: {
        padding: 15,
        alignItems: 'center',
    },

    btn_default: {
        backgroundColor: '#2c3d54',
    },

    btn_text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    container_bg: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
});