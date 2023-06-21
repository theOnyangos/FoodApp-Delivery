import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} className="w-5 h-5" />
      </View>
      <Text className="text-gray-500 px-4">{description}</Text>

      {/* ScrollView Area */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Fake Street"
          short_description="Sushi, Japanese, Asian"
          dishes={["Sushi", "Sashimi", "Ramen", "Miso", "Soup", "Gyoza"]}
          long={-0.1277583}
          lat={51.5074}
        />

        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/gn7"}
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Fake Street"
          short_description="Sushi, Japanese, Asian"
          dishes={["Sushi", "Sashimi", "Ramen", "Miso", "Soup", "Gyoza"]}
          long={-0.1277583}
          lat={51.5074}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
