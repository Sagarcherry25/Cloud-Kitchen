import React, { Fragment } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { globalStyles } from "../utilities/GlobalStyles";
import Carousel from "react-native-reanimated-carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import FoodCategories from "../components/FoodCategories";
import FoodItems from "../components/FoodItems";
import StickyHeader from "../components/StickyHeader";

const width = Dimensions.get("window").width;

// const baseOptions = {
//   vertical: false,
//   width: PAGE_WIDTH * 0.85,
//   height: PAGE_WIDTH / 2,
// } as const;

const Data = [
  {
    dishName: "Idli",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Biryani",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Chapathi",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1633442496018-6872fbfbbcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Parota",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
  {
    dishName: "Chicken",
    discountText: "Get 10% Off",
    imageUrl:
      "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isOfferAvailable: "",
    couponCode: "Welcome",
  },
];
const Home = () => {
  const { safeAreaWrapper, container } = globalStyles;
  return (
    <SafeAreaView style={safeAreaWrapper} className="flex-auto android:mt-10">
      <View style={container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          <StickyHeader />
          <Carousel
            loop
            width={width - 50}
            height={width / 2}
            autoPlay={true}
            data={Data}
            scrollAnimationDuration={3000}
            onSnapToItem={(index) => {}}
            renderItem={({ item }) => (
              <View
                style={{
                  overflow: "hidden",
                  margin: 20,
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderRadius: 25,
                }}
                className="flex-auto justify-center items-center border border-transparent rounded-3xl p-20 "
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{
                    width: width,
                    height: width / 2,
                    objectFit: "cover",
                    opacity: 0.8,
                  }}
                />
                <View className="absolute right-8 top-3">
                  {item.couponCode && item.discountText && (
                    <Fragment>
                      <Text className="font-extrabold text-white text-2xl">
                        {item.discountText.toLocaleUpperCase()}
                      </Text>
                      <Text className="font-extrabold text-white text-lg">
                        Use Code:
                      </Text>
                      <Text className="font-extrabold text-white text-2xl">
                        {item.couponCode.toLocaleUpperCase()}
                      </Text>
                    </Fragment>
                  )}
                  <TouchableOpacity onPress={() => console.log("Order now")}>
                    <View className="bg-[#1E1E1E] mt-2 text-center p-2 border border-transparent rounded-lg">
                      <Text className="text-white font-bold text-center">
                        {"Order now".toLocaleUpperCase()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <View>
            <FoodCategories />
          </View>
          <View className="mt-5">
            <Text className="text-xl font-semibold pb-3">
              Most Recent Placed Orders
            </Text>
            <FoodItems isFullItem={true} />
          </View>
          {/* <View>
            <FoodCategories />
          </View>
          <View>
            <FoodCategories />
          </View>
          <View>
            <FoodCategories />
          </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
