import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { RocketsStack } from "./Rockets.stack";
import { LaunchesStack } from "./Launches.stack";
import { PadsStack } from "./Pads.stack";
import { DashboardStack } from "./Dashboard.stack";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="DashboardStack" component={DashboardStack} />
      <Drawer.Screen name="RocketsStack" component={RocketsStack} />
      <Drawer.Screen name="LaunchesStack" component={LaunchesStack} />
      <Drawer.Screen name="PadsStack" component={PadsStack} />
    </Drawer.Navigator>
  );
};
