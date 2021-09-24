import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp, useTheme } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import DrawerButton from "../components/DrawerButton";
import TextLogo from "../components/TextLogo";

import LaunchDetailsScreen from "../screens/LaunchDetailsScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createStackNavigator();

export type DashboardStackParams = {
  DashboardScreen: undefined;
  LaunchDetailsScreen: { id: string };
};

export type DashboardStackNavProps<T extends keyof DashboardStackParams> = {
  navigation: StackNavigationProp<DashboardStackParams, T>;
  route: RouteProp<DashboardStackParams, T>;
};

export const DashboardStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="DashboardScreen"
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
        name="DashboardScreen"
        component={DashboardScreen}
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
