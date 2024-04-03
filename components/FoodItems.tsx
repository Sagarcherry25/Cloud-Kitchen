import React from "react";
import { FlatList, View, Image, Text } from "react-native";
import { IconButton, Icon } from "react-native-paper";

export interface FoodItemsProps {
  isHorizontal?: boolean;
  isFullItem?: boolean;
}

const DATA = [
  {
    title: "Plain Dosa",
    calories: 100,
    weight: 10,
    price: 80,
    imageUrl:
      "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
  },
  {
    title: "Masala Dosa",
    calories: 200,
    weight: 10,
    price: 80,
    imageUrl:
      "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
  },
  {
    title: "Idli",
    calories: 200,
    weight: 10,
    price: 80,
    imageUrl:
      "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
  },
  {
    title: "Paneer Dosa",
    calories: 400,
    weight: 10,
    price: 80,
    imageUrl:
      "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
  },
];

const FoodItems = (props: FoodItemsProps) => {
  return props.isFullItem ? (
    <FlatList
      keyExtractor={(item) => item.title}
      data={DATA}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View className="flex flex-row border border-s rounded-3xl overflow-hidden mt-5">
          <Image
            source={{ uri: item.imageUrl }}
            alt={item.title}
            height={140}
            width={140}
            style={{ objectFit: "cover", opacity: 0.9 }}
          />
          <View className="flex px-4 py-5 items-left">
            <Text className="font-bold text-xl pb-2">{item.title}</Text>
            <View className="flex flex-row pb-2">
              <Icon source={require('../assets/calories.png')} size={18} />
              <Text className="ml-1 mr-3">{item.calories} kcal</Text>
              <Icon source="weight-gram" size={18} color="gray" />
              <Text>{item.weight} gm</Text>
            </View>
            <Text className="font-bold text-lg">₹ {item.price}</Text>
          </View>
          <IconButton
            icon="plus-circle-outline"
            size={30}
            onPress={() => console.log("Pressed")}
            style={{position:'absolute', bottom: 5, right: 5}}
          />
        </View>
      )}
    />
  ) : (
    <FlatList
      horizontal={props?.isHorizontal || false}
      keyExtractor={(item) => item.title}
      data={DATA}
      renderItem={({ item }) => (
        <View className="border border-transparent">
          <Image
            source={{ uri: item.imageUrl }}
            alt={item.title}
            height={200}
            width={160}
            style={{ objectFit: "cover", opacity: 0.9 }}
          />
          <Text className="font-bold text-xl">{item.title}</Text>
          <View className="flex flex-row">
            <Text className="mr-3">{item.calories} kcal</Text>
            <Text>{item.weight} gm</Text>
          </View>
          <Text className="font-bold text-lg">$ {item.price}</Text>
        </View>
      )}
    />
  );
};

export default FoodItems;
