import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp, useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import DrawerButton from "../components/DrawerButton";

import PadsScreen from "../screens/PadsScreen";
import PadDetailsScreen from "../screens/PadDetailsScreen";
import TextLogo from "../components/TextLogo";

const Stack = createStackNavigator();

export type PadsStackParams = {
  PadsScreen: undefined;
  PadDetailsScreen: { id: string };
};

export type PadsStackNavProps<T extends keyof PadsStackParams> = {
  navigation: StackNavigationProp<PadsStackParams, T>;
  route: RouteProp<PadsStackParams, T>;
};

export const PadsStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="PadsScreen"
      screenOptions={{
        headerTitle: () => <TextLogo />,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: "transparent",
        },
      }}
    >
      <Stack.Screen
        name="PadsScreen"
        component={PadsScreen}
        options={{
          headerLeft: () => <DrawerButton />,
        }}
      />
      <Stack.Screen name="PadDetailsScreen" component={PadDetailsScreen} />
    </Stack.Navigator>
  );
};
