import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import DrawerButton from "../components/DrawerButton";

import LaunchesScreen from "../screens/LaunchesScreen";
import LaunchDetailsScreen from "../screens/LaunchDetailsScreen";
import TextLogo from "../components/TextLogo";

const Stack = createStackNavigator();

export type LaunchesStackParams = {
  LaunchesScreen: undefined;
  LaunchDetailsScreen: { id: string };
};

export type LaunchesStackNavProps<T extends keyof LaunchesStackParams> = {
  navigation: StackNavigationProp<LaunchesStackParams, T>;
  route: RouteProp<LaunchesStackParams, T>;
};

export const LaunchesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LaunchesScreen"
      screenOptions={{
        headerTitle: () => <TextLogo />,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="LaunchesScreen"
        component={LaunchesScreen}
        options={{
          headerLeft: () => <DrawerButton />,
        }}
      />
      <Stack.Screen
        name="LaunchDetailsScreen"
        component={LaunchDetailsScreen}
      />
    </Stack.Navigator>
  );
};
