// Стили шапки
import { StyleSheet } from "react-native";
import { appStyles } from "../../app-styles";

export const headerStyles = StyleSheet.create({
  background: {
    backgroundColor: appStyles.colorTheme.backgroundColor,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    color: appStyles.colorTheme.color,
    textAlign: "center",
  },
});
