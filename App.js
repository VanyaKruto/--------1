// Система
import { SafeAreaView, View, FlatList } from "react-native";
import { useState } from "react";

// Стили
import { appStyles } from "./app-styles";

// Компоненты
import Header from "./components/header/header";
import ListItem from "./components/list/list";
import Form from "./components/form/form";

// Главная функция проекта
export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить ...", key: "1" },
    { text: "Помыть ...", key: "2" },
    { text: "Сделать ...", key: "3" },
  ]);

  // Добавление задачи
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {
          text: text,
          key: Math.random().toString(36).substring(7),
        },
        ...list,
      ];
    });
  };

  // Удаление задачи
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <SafeAreaView style={appStyles.container}>
      <Header />

      <Form addHandler={addHandler} />

      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHGandler={deleteHandler} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
