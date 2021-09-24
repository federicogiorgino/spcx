import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LaunchesScreen: FC = () => {
  const navigation: any = useNavigation<any>();
  return (
    <View>
      <Button
        title="LaunchDetails"
        onPress={() => navigation.push("LaunchDetailsScreen")}
      />
    </View>
  );
};

export default LaunchesScreen;
