import * as Font from "expo-font";

export const getFonts = () =>
  Font.loadAsync({
    InterBlack: require("./Inter-Black.ttf"),
    InterLight: require("./Inter-Light.ttf"),
    InterRegular: require("./Inter-Regular.ttf"),
    InterMedium: require("./Inter-Medium.ttf"),
    InterSemiBold: require("./Inter-SemiBold.ttf"),
    InterBold: require("./Inter-Bold.ttf"),
  });
