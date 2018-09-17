import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {colors} from "app/constants/AppConstants"

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({

    wrap: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    bg_blue: {
        backgroundColor: '#1155c',
    },

    bg_black: {
        backgroundColor: '#222'
    },

    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    camera_btns: {
        color: '#fff',
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
    },

    map: {
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        bottom: 0,
        height: '40%',
        width: '100%',
    },

    home_container: {
        justifyContent: 'center',
        height: '20%',
        width: '100%',
        backgroundColor: colors.blueColor,
    },

    menu_icon: {
        color: '#fff',
        fontSize: 26,
        padding: 5,
    },

    profile_complition: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
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

    dropDown: {
        backgroundColor: colors.whiteColor,
        color: colors.whiteColor,
        fontSize: 26,
        padding: 5,
    },

    container_SubView1: {
        flex: 2,
        width: width*0.4,
        justifyContent: 'center',
        marginHorizontal: 30,
    },

    container_SubView2: {
        backgroundColor: colors.blueColor,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20,
    },

    container_SubView3: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    container_button: {
        justifyContent: 'center',
        height: 30,
        width: width*0.3,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 10,
        marginLeft: width*0.15,
    },

    segment_button: {
        justifyContent:'center',
        height: 30,
        width: width*0.25,
        borderRadius: 15,
        borderWidth:1,
        borderColor: 'white',
        marginTop: 10,
    },

    container_button1: {
        justifyContent: 'center',
        height: 30,
        width: width*0.3,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 10,
    },

    home_Button_Text: {
        textAlign: 'center',
        color: colors.whiteColor,
        fontSize: 14,
        marginHorizontal: 10,
    },

    home_container_Text: {
        justifyContent: 'center',
        textAlign: 'center',
        color: colors.whiteColor,
        fontSize: 16,
    },

    jam_title: {
        color: '#e67e22',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    jam_desc: {
        fontSize: 11,
        color: '#7f8c8d',
    },

    icon_actions: {
        color: '#e67e22',
    },

    panel_info: {
        borderRadius: 3,
        padding: 3,
        backgroundColor: '#fafafa',
        margin: 2,
    },

    chat_bubble: {
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 5,
        marginBottom: 15,
    },

    table_row: {
        flexDirection: 'row',
    },

    table_cell: {
        padding: 5,
    },

    container_bg: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },

    container_info: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        justifyContent: 'center',
    },

    box_login: {
        margin: 40,
    },

    container_center: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },

    container_top: {
        marginTop: 40,
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    bg_default: {
        backgroundColor: '#2c3d54',
    },

    container_default: {
        flex: 1,
        backgroundColor: '#307B87',
        padding: 20,
    },

    container: {
        flex: 1,
        backgroundColor: '#307B87',
        justifyContent: 'center',
    },

    app_heading: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 50,
        fontSize: 42,
        fontWeight: 'bold',
    },

    form_heading: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },

    nav_balance: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.whiteColor,
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
    },

    accordion_header: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },

    accordion_content: {
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 20,
    },

    toolbar_home: {
        backgroundColor: '#222',
        paddingTop: 25,
        paddingBottom: 2,
    },

    toolbar_home_btns: {
        padding: 10,
    },

    toolbar_home_icons: {
        fontSize: 18,
        color: '#fff',
    },

    top_icon_container: {
        flexDirection: 'row',
    },

    btn_circle: {
        backgroundColor: '#e67e22',
        borderRadius: 40/2,
        width: 40,
        height: 40,
        padding: 10,
        margin: 20,
    },

    shadow: {
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
    },

    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    footer_panel: {
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        padding: 10,
    },

    bg_grey: {
        backgroundColor: '#ccc',
    },

    bg_light_grey: {
        backgroundColor: '#eee',
    },

    bg_sky_blue: {
        backgroundColor: '#c8ebff',
    },

    header: {

    },

    footer: {

    },

    footer_brown_strip:{
        backgroundColor: '#444',
        bottom: 0,
        padding: 20,
    },

    footer_brown_strip_icon: {
        color: '#fff',
        fontSize: 14,
    },

    tab_text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        margin: 30,
        width: 70,
    },

    text: {
        color: '#7f8c8d',
    },

    text_center: {  
        textAlign: 'center',
    },

    text_muted: {
        color: '#bbb'
    },

    text_white: {
        color: '#fff',
    },

    text_green: {
        color: '#307B87',
    },

    text_blue: {
        color: '#265a88',
    },

    circle: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        backgroundColor: 'red',
    },

    pinText: {  
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },

    nav_item: {
        padding: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        boarderBottomWidth: 0.5,
        borderColor: 'white',
        marginLeft: 15,
        marginRight: 15,
    },

    nav_text: {
        fontSize: 15,
        padding: 15,
        color: colors.whiteColor,
        alignItems: 'center',
    },

    text_bold: {
        fontWeight: 'bold',
    },

    tab_icons: {
        color: '#fff',
        fontSize: 24,
    },

    tab_images: {
        width: 26,
        height: 26,
    },

    row: {
        padding: 10,
    },

    row_border: {
        padding: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },

    row_bg_fade: {
        backgroundColor: '#2a2a2a',
        borderBottomColor: '#333',
        borderTopColor: '#333',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        padding: 10,
    },

    row_float: {    
        alignItems: 'center',
        flexDirection: 'row',
    },

    row_item: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    col_inbox: {
        flex: 1,
        padding: 2,
    },

    col_inbox_content: {
        flex: 1,
        padding: 2,
    },

    col_inbox_content_text: {
        fontSize: 11,
    },

    box_float: {
        flex: 1,
    },

    row_profile_image: {
        padding: 20,
        alignItems: 'center',
    },

    profile_image: {
        width: 50,
        height: 50,
    },

    label: {
        color: '#333',
        marginBottom: 8,
        marginTop: 15,
        fontSize: 16,
    },

    text_mute: {
        color: '#aaa',
    },
      
    text_fade: {
        color: '#2b2b2b',
    },

    text_small: {
        fontSize: 11,
    },

    text_input: {
        color: '#333',
        fontSize: 12,
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    input_textarea: {
        height: 100,
        fontSize: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#333',
        marginBottom: 20,
        padding: 5,
    },

    input_select: {
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
    },

    input_checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 20/2,
        borderColor: '#ccc',
        backgroundColor: '#eee',
    },

    select_item: {
        color: '#fff',
    },

    card_bg: {
        height: 150,
        backgroundColor: '#265a88',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
    },

    bg_selected: {
        backgroundColor: '#265a88',
    },

    err_msg_text: {
        color: '#ccc',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    },
  
    btn_fade: {
        backgroundColor: '#444',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
    },

    btn_simple: {
        padding: 15,
        alignItems: 'center',
    },

    btn: {
        padding: 15,
        alignItems: 'center',
    },

    btn_square: {
        padding: 5,
        borderRadius: 3,
        alignItems: 'center',
    },

    btn_default: {
        backgroundColor: '#2c3d54',
    },

    btn_black: {
        backgroundColor: '#222',
        borderWidth: 1,
        borderColor: '#aaa',
    },

    btn_transparent: {
        borderWidth: 1,
        borderColor: '#009a9a',
    },

    btn_transparent_white: {
        borderWidth: 1,
        borderColor: '#fff',
    },

    btn_white: {
        backgroundColor: '#fff',
    },

    btn_transparent_blue: {
        borderWidth: 1,
        borderColor: '#265a88',
        padding: 14,
        alignItems: 'center',
    },

    btn_active: {
        backgroundColor: '#fff',
    },

    btn_text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    modal_wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#222',
        opacity: 0.9,
    },

    heading_modal: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        margin: 20,
    },
    
    btn_modal: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },

    btn_icon: {
        color: '#fff',
        fontSize: 20,
        margin: 5,
        width: 20,
    },

    icon_active: {
        color: '#265a88',
    },

    btn_icons_device: {
        color: '#fff',
        fontSize: 30,
        margin: 20,
        textAlign: 'center',
    },

    btn_text_modal: {
        color: '#fff',
        fontSize: 16,
        margin: 5,
    },

    btn_icons: {
        color: '#265a88',
        padding: 10,
        margin: 20,
    },

    customer_info: {
        width: 250,
        padding: 10,
    },

    text_link: {
        fontSize: 15,
        margin: 5,
        textAlign: 'center',
        color: 'white',
    },

    text_link1: {
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: colors.whiteColor,
    },

    text_escrew: {
        fontSize: 15,
        textAlign: 'left',
        color: colors.whiteColor,
        padding: 3,
    },

    text_discription: {
        fontSize: 15,
        margin: 5,
        textAlign: 'center',
        color: 'white',
    },

    box_column: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    heading_title: {
        marginTop: 0,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
    },

    speech_bubble: {
        borderRadius: 3,
        padding: 20,
        backgroundColor: '#eee',
    },

    text_input_white: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
    },

    graph: {
        backgroundColor: '#222',
        width: 150,
        height: 150,
        borderRadius: 150/2,
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#265a88',
    },

    graph_text_heading: {
        marginTop: 60,
        color: '#265a88',
        fontSize: 18,
        fontWeight: 'bold',
    },

    graph_text: {
        color: '#265a88',
        fontSize: 16,
        fontWeight: 'bold',
    },  

    container1: {
        top: 50,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width,
        height: 80,
        backgroundColor: 'transparent',
    },

    container2: {
        bottom: 50,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: width,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    roundedButton: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: colors.blueColor,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1.0
    },

    availBtn: {
        height: 40,
        width: 200,
        borderRadius: 20,
        backgroundColor: colors.blueColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
        opacity: 1.0
    },

    availText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },

    menu_icon1: {
        color: '#fff',
        fontSize: 27,
    },

    newTripUI: {
        bottom: 10,
        position: 'absolute',
        justifyContent: 'center',
        width: width-10,
        height: 300,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
    },  

    riderStyle: {
        flex: 2,
        alignItems: 'space-between',
        width: width-16,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        flexDirection: 'row',
        paddingHorizontal: 8,
    },

    commonTextStyle: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        width: width-16,
        paddingHorizontal: 5,
    },
    
    controlBtns: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width-16,
    },

    acceptBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blueColor,
        height: 40,
        width: ((width/2)-40),
        borderRadius: 20,
    },

    acceptText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },

    declineBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.redColor,
        height: 40,
        width: ((width/2)-40),
        borderRadius: 20,
    },

    declineText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },

    boldText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
    },

    normalText: {
        marginLeft: 4,
        fontSize: 14,
        color: 'black',
        textAlign: 'left',
    },

    statusPopup: {
        justifyContent: 'center',
        width: 200,
        height: 400,
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        borderRadius: 10,
        opacity: 1,
    },

    statusTopContainerOpen: {
        top: 150,
        right: 0,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 250,
        height: 400,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        margin: 5,
        opacity: 1,
    },

    statusTopContainerClose: {
        top: 150,
        right: -200,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 250,
        height: 400,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        margin: 5,
        opacity: 1
    },

    btnCommonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.redColor,
        height: 40,
        width: 150,
        borderRadius: 20,
        margin: 5
    },

    btnCommonStyle1: {

    },

    btnCommonStyle2: {

    },

    arrow: {

    },
})