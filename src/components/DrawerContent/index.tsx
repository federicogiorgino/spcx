import React, { useContext } from "react";
import { View } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { Title, Caption, Drawer, Text, Switch } from "react-native-paper";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

import Logo from "../Logo";
import { ThemeContext } from "../../context/Theme.context";
import { styles } from "./styles";

const DrawerContent = () => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.topSection}>
            <View style={styles.topSectionContent}>
              <Logo size={40} />
              <View>
                <Title style={styles.title}>SpaceX Hub</Title>
                <Caption style={styles.caption}>
                  Powered by SpaceX Unofficial API
                </Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Dashboard"
              icon={({ color, size }) => (
                <Ionicons
                  name="md-home-outline"
                  size={size}
                  color={colors.icon}
                />
              )}
              onPress={() => {
                navigation.navigate("DashboardStack");
              }}
            />
            <DrawerItem
              label="Launches"
              icon={({ color, size }) => (
                <Ionicons
                  name="md-rocket-outline"
                  size={size}
                  color={colors.icon}
                />
              )}
              onPress={() => {
                navigation.navigate("LaunchesStack");
              }}
            />
            <DrawerItem
              label="Rockets"
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="rocket-outline"
                  size={size}
                  color={colors.icon}
                />
              )}
              onPress={() => {
                navigation.navigate("RocketsStack");
              }}
            />
            <DrawerItem
              label="Pads"
              icon={({ color, size }) => (
                <MaterialIcons
                  name="workspaces-outline"
                  size={size}
                  color={colors.icon}
                />
              )}
              onPress={() => {
                navigation.navigate("PadsStack");
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Infos" style={styles.drawerSection}>
            <DrawerItem
              label="SpaceX"
              icon={({ color, size }) => (
                <Feather name="x-circle" size={size} color={colors.icon} />
              )}
              onPress={() => {
                navigation.navigate("CompanyScreen");
              }}
            />
            <DrawerItem
              label="History"
              icon={({ color, size }) => (
                <Ionicons
                  name="md-time-outline"
                  size={size}
                  color={colors.icon}
                />
              )}
              onPress={() => {
                navigation.navigate("HistoryScreen");
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences" style={styles.drawerSection}>
            <View style={styles.preference}>
              <Entypo name="light-up" size={24} color={colors.icon} />
              <Text style={{ color: colors.icon, fontWeight: "600" }}>
                Dark Mode
              </Text>
              <View pointerEvents="none" />
              <Switch
                value={isDarkTheme}
                onValueChange={() => switchTheme()}
                color={colors.primary}
              />
            </View>

            <DrawerItem
              label="About"
              icon={({ color, size }) => (
                <Feather name="info" size={size} color={colors.icon} />
              )}
              onPress={() => {
                navigation.navigate("AboutScreen");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
