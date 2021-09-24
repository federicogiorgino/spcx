import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get("screen").width / 1.5,
    height: Dimensions.get("screen").width / 3,
  },
  container: { flex: 1, alignItems: "center", padding: 15 },
  underLogoText: { fontWeight: "bold", fontSize: 18 },
  linkText: { fontWeight: "bold", fontStyle: "italic" },
  summaryText: { fontWeight: "500" },
  labelValueRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelText: { fontWeight: "bold" },
  valueText: { fontWeight: "500" },
});
