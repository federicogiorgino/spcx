import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { DashboardStackNavProps } from "../../navigation/Dashboard.stack";

const DashboardScreen = ({
  navigation,
}: DashboardStackNavProps<"DashboardScreen">) => {
  return (
    <View>
      <Button
        title="Launch"
        onPress={() => navigation.push("LaunchDetailsScreen")}
      />
    </View>
  );
};

export default DashboardScreen;
