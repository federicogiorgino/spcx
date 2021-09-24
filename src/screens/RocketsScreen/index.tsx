import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RocketsScreen: FC = () => {
  const navigation: any = useNavigation<any>();
  return (
    <View>
      <Button
        title="RocketDetails"
        onPress={() => navigation.push("RocketDetailsScreen")}
      />
    </View>
  );
};

export default RocketsScreen;
