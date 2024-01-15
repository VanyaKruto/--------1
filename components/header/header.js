// Система
import { View, Text } from "react-native";

// Стили
import { headerStyles } from "./header-styles";

// Шапка
export default function Header() {
  return (
    <View style={headerStyles.background}>
      <Text style={headerStyles.text}>Список дел</Text>
    </View>
  );
}
