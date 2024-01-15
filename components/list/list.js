
import { TouchableOpacity, Text } from "react-native";

import { listStyles } from "./list-styles";

export default function ListItem({ el, deleteHGandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHGandler(el.key)}>
      <Text style={listStyles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}
