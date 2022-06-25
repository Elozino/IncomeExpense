import * as Font from "expo-font";

export const getFonts = () =>
  Font.loadAsync({
    InterBlack: require("./Inter-Black.ttf"),
  });
