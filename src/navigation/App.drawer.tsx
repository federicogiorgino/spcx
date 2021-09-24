import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { RocketStack } from "./Rockets.stack";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="RocketStack" component={RocketStack} />
    </Drawer.Navigator>
  );
};
