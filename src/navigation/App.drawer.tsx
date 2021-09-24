import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { RocketsStack } from "./Rockets.stack";
import { LaunchesStack } from "./Launches.stack";
import { PadsStack } from "./Pads.stack";
import { DashboardStack } from "./Dashboard.stack";

import AboutScreen from "../screens/AboutScreen";
import CompanyScreen from "../screens/CompanyScreen";
import HistoryScreen from "../screens/HistoryScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="DashboardStack" component={DashboardStack} />
      <Drawer.Screen name="RocketsStack" component={RocketsStack} />
      <Drawer.Screen name="LaunchesStack" component={LaunchesStack} />
      <Drawer.Screen name="PadsStack" component={PadsStack} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      <Drawer.Screen name="CompanyScreen" component={CompanyScreen} />
      <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
    </Drawer.Navigator>
  );
};
