/** Device Utilities */

import { Dimensions, Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Singleton from 'singleton';

const { height, width } = Dimensions.get('window');

const ANDROID_LOW_LEVEL_API = Platform.select({
    android: Platform.Version < 21,
    ios: false,
});

const PLATFORM_IS_IOS = (Platform.OS === 'ios');

class DeviceUtilities extends Singleton {

    androidLowLevelApi = ANDROID_LOW_LEVEL_API;
    platformIsIOS = PLATFORM_IS_IOS;
    screen = { height, width };

    navBarHeight = Platform.select({ android: 60, ios: 50 });
    statusBarHeight = ANDROID_LOW_LEVEL_API ? 0 : 20;

    navBarPadding = Platform.select({
        android: this.navBarHeight,
        ios: this.navBarHeight + this.statusBarHeight,
    });

    get buildInfo() {
        const bundleId = DeviceInfo.getBundleId();
        const version = DeviceInfo.getVersion();
        const buildNumber = parseInt(DeviceInfo.getBuildNumber());

        const bundleIdParts = bundleId.split('.');
        const lastPart = bundleIdParts[bundleIdParts.length - 1];

        const suffix = (lastPart === 'dev' || lastPart === 'stg') ? lastPart : '';

        let variant = '';

        switch (suffix) {
            case 'dev': variant = 'debug'; 
                break;
            case 'stg': variant = 'staging';
                break;
            default variant = 'release';
                break;
        };
    }

    showNetworkActivity(visible) {
        if (!PLATFORM_IS_IOS)
            return;
        StatusBar.setNetworkActivityIndicatorVisible(visible);
    }

    showStatusBar(visible) {
        if (ANDROID_LOW_LEVEL_API)
            return;
        StatusBar.setHidden(!visible, 'slide');
    }
}

export default DeviceUtilities.get();