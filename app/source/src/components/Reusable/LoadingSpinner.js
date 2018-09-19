/**
 * @providesModule GetCoins.Components.Reusables.LoadingSpinner
 */

/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import { StyleSheet, Text, View,Modal,Image } from 'react-native';
import Spinner from 'react-native-spinkit';
import Button from 'react-native-button';

// Utils


export function PlaceholderSpinner(props) {
  return (
    <Spinner color="#4A4D55" isVisible size={30} type="ThreeBounce" {...props} />
  );
}

export function LoadingButton(props) {
  const { loading, loadingProps, onPress, children } = props;
  
  const spinner = (
    <Spinner color={'transparent'} isVisible size={30} type={'Wave'} {...loadingProps} />
  );
  
  const overrideProps = {
    disabled: loading,
    onPress: loading ? null : onPress,
  };

  return (
    <Button {...props} {...overrideProps}>
      {loading ? spinner : children}
    </Button>
  );
}
