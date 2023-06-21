import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetchFeaturedCategories();
  }, []);

  const fetchFeaturedCategories = async () => {
    try {
      const featured = await client.fetch(
        `*[_type == "featured"]{
        ...,
        restaurant[]->{
          ...,
          dishes[]->{
            ...,
          }
        }
      }`
      );
      setFeaturedCategories(featured);
    } catch (error) {
      // Handle the error here, e.g., log the error or show an error message
      console.error("Error fetching featured categories:", error);
    }
  };

  return (
    <SafeAreaView>
      <View className="bg-white">
        {/* Header */}
        <View className="flex-row pb-3 pt-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="w-10 h-10 bg-gray-700 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color={"#00CCBB"} />
            </Text>
          </View>

          {/* User Icon */}
          <UserIcon size={20} color={"#00CCBB"} />
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center mx-4 space-x-2 pb-2">
          <View className="flex-1 bg-slate-200 flex-row space-x-2 p-3">
            <MagnifyingGlassIcon size={20} color={"#00CCBB"} />
            <TextInput
              placeholder="Restaurant and cuisine"
              keyboardType="default"
            />
          </View>

          <AdjustmentsVerticalIcon size={20} color={"#00CCBB"} />
        </View>
      </View>

      {/* Restaurant List */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placement for our partners"
        />
        <FeaturedRow
          id="2"
          title="Featured"
          description="Paid placement for our partners"
        />
        <FeaturedRow
          id="2"
          title="Featured"
          description="Paid placement for our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
