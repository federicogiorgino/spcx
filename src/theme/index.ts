import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  DarkTheme,
  DefaultTheme,
  ExtendedTheme,
} from "@react-navigation/native";

export const CustomDefaultTheme: ExtendedTheme = {
  ...DefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#FFFFFF",
    text: "#333333",
    primary: "#0F2F64",
    icon: "#757575",
  },
};

export const CustomDarkTheme: ExtendedTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#070707",
    text: "#f5f5f5",
    primary: "#005288",
    surface: "#111111",
    icon: "#ACACAC",
  },
};
