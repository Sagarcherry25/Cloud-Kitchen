import React from "react";
import { Image, Text, View } from "react-native";

const mentList = [
  {
    menuTitle: "Veg Meals",
    menuImgUrl:
      "https://media.istockphoto.com/id/483405040/photo/south-indian-meals-on-banana-leaf.jpg?s=1024x1024&w=is&k=20&c=E7ujSWO1S0XoVpqkYJqwdQCyP3j-V0Xo2rxYdTGXSI0=",
    navigationUrl: "",
  },
  {
    menuTitle: "Chicken ",
    menuImgUrl:
      "https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=1024x1024&w=is&k=20&c=1tcCQiQ7pEY7EvpwT6mp2wWQyCETQKOIWd0HGuLH5hI=",
    navigationUrl: "",
  },
  {
    menuTitle: "Biryani",
    menuImgUrl:
      "https://media.istockphoto.com/id/531689726/photo/cooked-white-basmati-rice-with-carrot-and-capsicum-toppings.jpg?s=1024x1024&w=is&k=20&c=iKGRtxSZNTPCQsOouT0C5gVUZx9fcq2BD1s7MZtkLcM=",
    navigationUrl: "",
  },
  {
    menuTitle: "Breakfast",
    menuImgUrl:
      "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=1024x1024&w=is&k=20&c=HzmQ2OsrnShzKCK4umDqTgn4Kr4y26nnqkslY9kvlcI=",
    navigationUrl: "",
  },
  {
    menuTitle: "Fish",
    menuImgUrl:
      "https://media.istockphoto.com/id/1295772368/photo/macher-jhol-in-black-bowl-on-dark-slate-table-top-indian-cuisine-bengali-fish-curry-asian.jpg?s=1024x1024&w=is&k=20&c=1RMq2BAk4ZEWQ27jKeVZxjE1_EfZPK5wwxGI3zbDH60=",
    navigationUrl: "",
  },
  {
    menuTitle: "Veg",
    menuImgUrl:
      "https://media.istockphoto.com/id/495201462/photo/indian-pulav-or-vegetables-rice-or-veg-biryani-orange-background.jpg?s=1024x1024&w=is&k=20&c=M81lTgGaEGh2eRyd0H9udr-m5ei5HRSFCMxTWo_ikfk=",
    navigationUrl: "",
  },
  {
    menuTitle: "Veg Rice",
    menuImgUrl:
      "https://media.istockphoto.com/id/1222031490/photo/veg-pulao-with-paneer-tikka-masala-and-lachha-paratha.jpg?s=1024x1024&w=is&k=20&c=xIfBNBOCyHeYdPPp6slLPDUly6ud2-n1d8M91b7nRLg=",
    navigationUrl: "",
  },
  {
    menuTitle: "Non-Veg",
    menuImgUrl:
      "https://media.istockphoto.com/id/476524744/photo/bowl-of-lamb-curry.jpg?s=2048x2048&w=is&k=20&c=8HVKrTCaoNCfAdvJre96YM8zkRMKYS-YDjz17xjgVF8=",
    navigationUrl: "",
  },
];
const FoodCategories = () => {
  return (
    <View className="flex-auto flex-wrap mt-5 flex-row">
      {mentList.map((item) => (
        <View className="flex-column p-3 android:pr-2" key={item.menuTitle}>
          <Image
            source={{ uri: item.menuImgUrl, height: 70, width: 70 }}
            className="rounded-full"
            style={{objectFit:'cover'}}
          />
          <Text className="text-center">{item.menuTitle}</Text>
        </View>
      ))}
    </View>
  );
};

export default FoodCategories;
