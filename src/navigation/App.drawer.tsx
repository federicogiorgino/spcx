import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AboutScreen from "../screens/AboutScreen";
import HistoryScreen from "../screens/HistoryScreen";
import RocketsScreen from "../screens/RocketsScreen";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator
    // drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={AboutScreen} />
      <Drawer.Screen name="Launches" component={HistoryScreen} />
      <Drawer.Screen name="Rockets" component={RocketsScreen} />
    </Drawer.Navigator>
  );
};
