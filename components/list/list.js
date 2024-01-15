// Система
import { TouchableOpacity, Text } from "react-native";

// Стили
import { listStyles } from "./list-styles";

// Листинг задач
export default function ListItem({ el, deleteHGandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHGandler(el.key)}>
      <Text style={listStyles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}
