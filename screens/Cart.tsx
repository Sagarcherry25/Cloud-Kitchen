import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Divider, Icon } from "react-native-paper";

const Cart = () => {
  const cartItems = [
    {
      imageUrl:
        "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
      ItemName: "Plain Dosa",
      price: "50",
      quantity: 1,
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
      ItemName: "Meals",
      price: "80",
      quantity: 1,
    },
  ];

  const shippingAddress = "Flat no 9B, Landmark World, Palazhi, Calicut";
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex border-transparent rounded-3xl bg-slate-700 m-5 p-4 opacity-1">
        <Text className="text-white font-bold">Order Summary</Text>
        {cartItems.map((item) => {
          return (
            <View className="flex flex-row my-3 justify-around items-center" key={item.ItemName}>
              <Image
                source={{ uri: item.imageUrl }}
                alt={item.ItemName}
                height={80}
                width={110}
                style={{
                  objectFit: "cover",
                  opacity: 0.9,
                  borderRadius: 5,
                }}
              />
              <View className="flex">
                <Text className="text-white font-bold pb-3">
                  {item.ItemName}
                </Text>
                <Text className="text-white font-bold">
                  Qty: {item.quantity}
                </Text>
              </View>
              <Text className="text-white font-bold">Price: ₹{item.price}</Text>
            </View>
          );
        })}
        <Divider />
        <View className="flex flex-row justify-between py-4">
          <Icon source="map-marker" size={20} color="white" />
          <Text className="text-white font-bold">{shippingAddress}</Text>
          <Icon source="pencil-box-outline" size={25} color="white" />
        </View>
        <Divider />
        <View className="flex flex-row justify-between p-3">
          <Text className="text-white font-bold text-lg">Rate</Text>
          <Text className="text-white font-bold">
            ₹{cartItems.reduce((acc, curr) => acc + parseInt(curr.price), 0)}
          </Text>
        </View>
      </View>
      <View className="flex border-transparent rounded-3xl bg-slate-700 m-5 p-4 opacity-1 ">
        <View className="flex flex-row justify-between">
          <Text className="text-white font-bold text-lg">SubTotal</Text>
          <Text className="text-white font-bold">
            ₹{cartItems.reduce((acc, curr) => acc + parseInt(curr.price), 0)}
          </Text>
        </View>
        <View className="flex flex-row justify-between p-5 pt-10">
          <Text className="text-white font-bold">GST</Text>
          <Text className="text-white font-bold">₹{20}</Text>
        </View>
        <View className="flex flex-row justify-between p-5 pt-3">
          <Text className="text-white font-bold">
            Delivery partner fee for 8km
          </Text>
          <Text className="text-white font-bold">₹{20}</Text>
        </View>
        <Divider />
        <View className="flex flex-row justify-between py-5">
          <Text className="text-white font-extrabold text-xl">Grand Total</Text>
          <Text className="text-white font-bold">
            ₹
            {cartItems.reduce((acc, curr) => acc + parseInt(curr.price), 0) +
              40}
          </Text>
        </View>
      </View>
      <View className="flex justify-center items-center mb-5">
        <TouchableOpacity onPress={() => console.log("Order now")}>
          <View className="bg-[#1E1E1E] mt-2 text-center px-16 py-4 border border-transparent rounded-lg">
            <Text className="text-white font-bold text-center">
              {"Order now".toLocaleUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cart;
