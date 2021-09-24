import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import DrawerButton from "../components/DrawerButton";

import RocketsScreen from "../screens/RocketsScreen";
import RocketDetailsScreen from "../screens/RocketDetailsScreem";

const Stack = createStackNavigator();

export type RocketStackParams = {
  RocketsScreen: undefined;
  RocketDetailsScreen: { id: string };
};

export type RocketStackNavProps<T extends keyof RocketStackParams> = {
  navigation: StackNavigationProp<RocketStackParams, T>;
  route: RouteProp<RocketStackParams, T>;
};

export const RocketStack = () => {
  return (
    <Stack.Navigator initialRouteName="RocketsScreen">
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
