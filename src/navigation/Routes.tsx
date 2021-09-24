import React, { FC, useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeContext } from "../context/Theme.context";
import { AppDrawer } from "./App.drawer";

export const Routes: FC = () => {
  const { theme, isDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <AppDrawer />
        </NavigationContainer>
      </PaperProvider>
      <ExpoStatusBar style={isDarkTheme ? "light" : "dark"} />
    </>
  );
};
