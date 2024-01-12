import React from "react";
import { FlatList, View, Image, Text, SafeAreaView } from "react-native";

const FoodItems = () => {
  return (
    <SafeAreaView className="flex-1 bg-white mt-5">
      <FlatList
        horizontal={true}
        keyExtractor={(item) => item.title}
        data={[
          {
            title: "Plain Dosa",
            calories: 0,
            weight: 10,
            price: 80,
            imageUrl:
              "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
          },
          {
            title: "Plain Dosa",
            calories: 0,
            weight: 10,
            price: 80,
            imageUrl:
              "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
          },
          {
            title: "Plain Dosa",
            calories: 0,
            weight: 10,
            price: 80,
            imageUrl:
              "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
          },
          {
            title: "Plain Dosa",
            calories: 0,
            weight: 10,
            price: 80,
            imageUrl:
              "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
          },
        ]}
        renderItem={({ item }) => (
          <View className="border border-transparent">
            <Image
              source={{ uri: item.imageUrl }}
              alt={item.title}
              height={200}
              width={160}
              style={{ objectFit: "cover", opacity:0.9 }}
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
    </SafeAreaView>
  );
};

export default FoodItems;
