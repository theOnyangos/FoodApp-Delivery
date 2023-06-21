import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="mr-4 bg-white rounded-sm shadow">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-2">
          <StarIcon size={20} color={"#00CCBB"} opacity={0.5} />
          <Text className="text-gray-500">
            <Text className="text-gray-500">{rating}</Text> • {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-2 pt-2">
          <MapPinIcon size={20} color={"#00CCBB"} opacity={0.5} />
          <Text className="text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
