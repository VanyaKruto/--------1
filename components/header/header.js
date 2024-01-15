
import { View, Text } from "react-native";


import { headerStyles } from "./header-styles";


export default function Header() {
  return (
    <View style={headerStyles.background}>
      <Text style={headerStyles.text}>Список дел</Text>
    </View>
  );
}
