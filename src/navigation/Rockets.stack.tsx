import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp, useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import DrawerButton from "../components/DrawerButton";

import RocketsScreen from "../screens/RocketsScreen";
import RocketDetailsScreen from "../screens/RocketDetailsScreen";
import TextLogo from "../components/TextLogo";

const Stack = createStackNavigator();

export type RocketsStackParams = {
  RocketsScreen: undefined;
  RocketDetailsScreen: { id: string };
};

export type RocketsStackNavProps<T extends keyof RocketsStackParams> = {
  navigation: StackNavigationProp<RocketsStackParams, T>;
  route: RouteProp<RocketsStackParams, T>;
};

export const RocketsStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="RocketsScreen"
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
        name="RocketsScreen"
        component={RocketsScreen}
        options={{
          headerLeft: () => <DrawerButton />,
        }}
      />
      <Stack.Screen
        name="RocketDetailsScreen"
        component={RocketDetailsScreen}
      />
    </Stack.Navigator>
  );
};
