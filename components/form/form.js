// Система
import { View, TextInput, Button } from "react-native";
import { useRef, useState } from "react";

// Стили
import { formStyles } from "./form-styles";
import { appStyles } from "../../app-styles";

// Главная функция проекта
export default function Form({ addHandler }) {
  const inputRef = useRef(null); // Хук для доп. функции
  const [text, setText] = useState("");

  const OnChange = (text) => {
    setText(text);
  };

  // Моя доп. функция (очистка содержимого поля ввода после добавления задачи)
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
          addHandler(text), clearInput() /* Подключение моей доп. функции */;
        }}
        disabled={!text} // мой доп. метод (отключение кнопки при пустом поле ввода)
        color={appStyles.colorTheme.backgroundColor}
      />
    </View>
  );
}
