
import { View, TextInput, Button } from "react-native";
import { useRef, useState } from "react";


import { formStyles } from "./form-styles";
import { appStyles } from "../../app-styles";
import { headerStyles } from "../header/header-styles";


export default function Form({ addHandler }) {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const OnChange = (text) => {
    setText(text);
  };

  const clearInput = () => {
    inputRef.current.clear();
  };

  return (
    <View>
      <TextInput
        ref={inputRef}
        style={formStyles.input}
        onChangeText={OnChange}
        placeholder="Впишите задачу..."
      />
      <Button
        title="Добавить задачу"
        onPress={() => {
          addHandler(text), clearInput() 
        }}
        disabled={!text} 
        color={appStyles.colorTheme.backgroundColor}
        
      />
    </View>
  );
}
