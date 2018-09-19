/**
 * @providesModule GetCoins.Utils.Notice
 */

import { Alert } from 'react-native';
import Toast from 'react-native-root-toast';
import Singleton from 'singleton';
import _ from 'lodash';

class Notice extends Singleton {
  // Reference to clear User's info & switch to Authentication view
  onSignOutCurrentUser;
  didNoticeForSignOut = false;

  toast(message, options = {}) {
    if (_.isEmpty(message)) return;

    const { top = false } = options;
    Toast.show(message, { position: Toast.positions[top ? 'TOP' : 'TOP'] });
  }

  alert(title, message, buttons) {
    if (title == null && message == null) return;
    Alert.alert(title, message, buttons);
  }

  unauthorized(errorMessage) {
    if (this.didNoticeForSignOut)
      return;

    this.didNoticeForSignOut = true;

    const onPress = (() => {
      this.onSignOutCurrentUser && this.onSignOutCurrentUser();
      this.didNoticeForSignOut = false;
    });

    const message = errorMessage == null && typeof(errorMessage) !== 'string'
      ? 'Something happens when we\'re trying to authorize you, please Log-out & Log-in again!'
      : errorMessage;

    Alert.alert('Request error', message, [{ text: 'Log out', onPress }]);
  }

  retry(message, retryCallback, promptForSignOut = false) {
    const displayingMessage = _.compact([message, 'Please try again']).join('\n');
    
    const buttons = [
      { text: 'Retry', style: 'cancel', onPress: retryCallback },
      promptForSignOut
        ? { text: 'Log out', onPress: this.onSignOutCurrentUser }
        : { text: 'Cancel' },
    ];

    Alert.alert('Error', displayingMessage, buttons);
  }
}

export default Notice.get();
