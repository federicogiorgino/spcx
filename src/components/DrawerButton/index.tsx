import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

const DrawerButton = () => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  return (
    <Entypo
      name="menu"
      size={28}
      style={{ marginHorizontal: 10 }}
      color={colors.primary}
      onPress={() => navigation.openDrawer()}
    />
  );
};

export default DrawerButton;
