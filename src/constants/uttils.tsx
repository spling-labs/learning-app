import { Dimensions, Platform } from "react-native";

//PACKAGES
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

const baseWidth = 375;
const baseHeight = 812;

const SCALE_SIZE = (size: number, fontScale = 0) => {

    // if (DeviceInfo.isTablet()) {
    //     return (size * 0.4) + (fontScale * 1.5)
    // }

    const { width, height } = Dimensions.get('window');
    const scaleWidth = width / baseWidth;
    const scaleHeight = (height - (StaticSafeAreaInsets.safeAreaInsetsTop + StaticSafeAreaInsets.safeAreaInsetsBottom)) / baseHeight
    const scale = Math.min(scaleWidth, scaleHeight);
    const fontsize = Math.ceil((size * scale))
    return fontsize + (fontScale * 1.5)
}

export {
    SCALE_SIZE
}
