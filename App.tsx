import React from "react";
import { View, Text } from "react-native";
import { ThemeContextProvider } from "./src/context/Theme.context";
import { Routes } from "./src/navigation/Routes";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
};

export default App;
