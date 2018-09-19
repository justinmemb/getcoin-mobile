/**
 * @providesModule GetCoins.Components.Reusable.AuthButton
 */

import React from 'react';
import { Text, View } from 'react-native';

// Components
import { LoadingButton } from './LoadingSpinner';

// Utils


// Locals
import styles from './styles';

function getContainerStyle(primary, secondary, link) {
  const linkStyle = link ? styles.linkButtonContainer : null;
  const secondaryStyle = secondary ? styles.secondaryButtonContainer : linkStyle;
  return primary ? styles.primaryButtonContainer : secondaryStyle;
}

export default function AuthButton({
  primary, secondary, link, loading,
  sceneKey, children, onPress,
  containerStyle: extraContainerStyle, textStyle: extraTextStyle,
}) {
  const containerStyle = getContainerStyle(primary, secondary, link);
  const loadingProps = { color: primary ? '#eff5f8' : '#6c6d7a' };

  const onNavigateScene = sceneKey != null ? () => Actions[sceneKey]() : null;
  const onButtonPress = onPress != null ? onPress : onNavigateScene;
  const textStyle = primary ? styles.primaryButtonText : null;

  return (
    <View style={styles.flexWidth}>
      <LoadingButton
        loading={loading}
        loadingProps={loadingProps}
        containerStyle={[styles.buttonContainer, containerStyle, extraContainerStyle]}
        style={[styles.buttonText, textStyle, extraTextStyle]}
        onPress = {onPress}
      >
        {children}
      </LoadingButton>
    </View>
  );
}

AuthButton.propTypes = {
  primary: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
  link: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  sceneKey: React.PropTypes.string,
  children: React.PropTypes.any,
  onPress: React.PropTypes.func,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
};

AuthButton.defaultProps = {
  primary: false,
  secondary: false,
  link: false,
  loading: false,
  onPress: null,
  sceneKey: null,
};
