
import { SafeAreaView, View, FlatList } from "react-native";
import { useState } from "react";


import { appStyles } from "./app-styles";


import Header from "./components/header/header";
import ListItem from "./components/list/list";
import Form from "./components/form/form";


export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Оплатить", key: "1" },
    { text: "Купить", key: "2" },
    { text: "Продать?", key: "3" },
    { text: "Сделать WPF приложение", key: "4" },
    { text: "Заказать такси", key: "5" },
  ]);


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
