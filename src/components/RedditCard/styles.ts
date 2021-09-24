import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: { margin: 10, padding: 20 },
  image: { height: 50, width: 50 },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    width: "80%",
    maxWidth: "80%",
    fontWeight: "600",
  },
  bottomRow: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  votesText: {
    fontWeight: "500",
  },
  detailsText: {
    marginRight: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  votesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
});
