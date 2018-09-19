/**
 * @providesModule GetCoins.styles
 */

import { Platform, StyleSheet, Dimensions } from 'react-native';
import {colors} from "../../../../constants/AppConstants";
const {height, width} = Dimensions.get('window');
// Utils

export default StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  flexWidth: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
      backgroundColor:'transparent',
  },

  contentBlock: {
    //paddingVertical : 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },

  onContainer: {
    flex: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 8,
  },
  primaryButtonContainer: {
      padding:8,
      //borderRadius: 3,
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#aaa',
      borderRadius:30,
      width:width/2
  },
  secondaryButtonContainer: {
    borderWidth: 0.5,
    borderColor: 'white',
  },

  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign:'center'

  },
  primaryButtonText: {
    color: '#eff5f8',
  },
    buttonContainer:{
    flex:1,
    marginHorizontal:50,

    },
  linkButtonContainer: {
    flexGrow: 1,
    height: null,
    marginTop: 14.5,
    marginBottom: 37,
  },

});
