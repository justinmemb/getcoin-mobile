import React from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';

import _ from 'lodash';
import { ICONS, colors } from '../../../../constants/AppConstants';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },

    landingRootView: {
        flex: 1,
    },

    forgotRootView: {
        flex: 1,
    },

    appLogoLanding: {
        top: height / 8,
    },

    icon: {
        position: 'absolute',
        top: 33,
        right: 0,
    },

    flexWidth: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    appLogoLogIn: {
        marginTop: height/8,
        marginBottom: height/12,
    },

    appLogoSignUp: {
        marginTop: 40,
        marginBottom: 10,
    },

    appName: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Dosis-SemiBold',
    },

    logInText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Dosis-SemiBold',
    },

    authHeaderContainer: {
        marginTop: 30,
        marginBottom: 48.5,
    },

    headerTitle: {
        textAlign: 'center',
        color: '#20a8fe',
        fontSize: 40,
        fontFamily: 'OpenSans-Bold',
        ...Platform.select({ ios: { lineHeight: 40 } }),
        marginBottom: 30,
    },
    
    contentBlock: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },

    landingContentBlock: {
        top: height/7,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },

    textInputContainer: {
        borderBottomWidth: 0.5,
        borderColor: '#cccdd3',
        borderStyle: 'solid',
        marginBottom: 5,
    },

    textInputContainer_Blue: {
        borderBottomWidth: 0.5,
        borderColor: '#20a8fe',
        borderStyle: 'solid',
        marginBottom: 5,
    },

    textInputContainer_Search: {
        borderBottomWidth: 0.0,
        borderColor: 'white',
        borderStyle: 'solid',
        marginBottom: 0,
    },

    textInput: {
        fontSize: 15,
        color: colors.whiteColor,
        textAlign: 'left',

        flex: 1,
        height: 20,
        width: width,
        ...Platform.select({ ios : { lineHeight: 25 } }),
        backgroundColor: 'transparent',
    },

    buttonContainer: {
        flex: 1,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        marginTop: 15,
        marginBottom: 10,
    },

    primaryButtonContainer: {
        backgroundColor: '#20a8fe',
        borderRadius: 21,
    },

    secondaryButtonContainer: {
        borderWidth: 1,
        borderColor: '#20a8fe',
        borderRadius: 21,
    },

    buttonText: {
        color: '#6c6d7a',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Dosis-SemiBold',
    },

    primaryButtonText: {
        color: '#eff5f8',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Dosis-SemiBold',
    },

    linkButtonContainer: {
        flexGrow: 1,
        height: null,
        marginTop: 14.5,
        marginBottom: 37,
    },

    termsOfUseButtonContainer: {
        marginTop: 19.5,
        marginBottom: 41,
    },

    leftImageStyle: {
        top: 0,
        left: 15,
        marginRight: 10,
        width: 30,
        resizeMode: 'contain',
    },

    leftImageStyleIOS: {
        top: 0,
        left: 5,
        marginRight: 20,
        width: 30,
        resizeMode: 'contain',
    },

    getActivationCodeButtonContainer: {
        height: 42,
        marginTop: 2,
    },

    container12: {
        flex: 1,
    },

    attachMentButtonStyle: {
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        height: 20,
        width: 20,
    },

    attachButtonContainer: {
        top: 0,
        right: 10,
        borderWidth: 0,
        borderColor: '#e3e4e7',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        width: 42,
        height: 54,
    },
});

function getPlaceholderText(mobileInput, activationCodeInput, passwordInput) {

    const passwordPlaceholder = passwordInput != null ? 'Password' : "Password";
    const activationCodePlaceholder = activationCodeInput != null ? 'Activation code' : passwordPlaceholder;
}

function getKeyboardType(mobileInput, activationCodeInput, passwordInput) {

    const passwordKeyboard = passwordInput != null ? 'default' : 'undefined';
    const activationCodeKeyboard = activationCodeInput != null ? 'ascii-capable' : passwordKeyboard;

    return mobileInput != null ? 'phone-pad' : activationCodeKeyboard;
}

export default function AuthInput ({
    mobileInput, activationCodeInput, passwordInput, lastField,
    onSubmitEditing, onChangeText, inputRef, isSecure, showHide, showHideFunction, leftImage, isFocus, fromSearch,
    ...restProps
}) {

    const placeholder = getPlaceholderText(mobileInput, activationCodeInput, passwordInput);
    const keyboardType = getKeyboardType(mobileInput, activationCodeInput, passwordInput);

    const customProps = {
        keyboardType,
        onChangeText,
        onSubmitEditing,
        placeholder,
        ref: inputRef,
        returnKeyType: lastField != null ? 'go' : 'next',
        secureTextEntry: showHide && passwordInput !== null
    };

    const leftImageStyle =Platform.OS === 'ios' ? styles.leftImageStyleIOS : styles.leftImageStyle;
    const textInputContainer = isFocus ? styles.textInputContainer_Blue : styles.textInputContainer;
    const newStyle = textInputContainer;
    const SecureImage = ICONS.logoImage;

    return (
        <View style={[styles.flexWidth, newStyle]}>
            {!fromSearch && <Image style={leftImageStyle} source={leftImage} />}
            <TextInput
                autoCorrect={false}
                clearButtonMode={'while-editing'}
                placeholderTextColor={colors.whiteColor}
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
                {...customProps}
                {...restProps}
            />
            {isSecure && (<TouchableOpacity onPress={showHideFunction} style={styles.attachButtonContainer}>
                <Image  
                    style={styles.attachMentButtonStyle}
                    source={SecureImage}
                />
            </TouchableOpacity>)}
        </View>
    );
}