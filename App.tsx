import React from "react";
import { View, Text } from "react-native";
import { ThemeContextProvider } from "./src/context/Theme.context";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
};

export default App;
