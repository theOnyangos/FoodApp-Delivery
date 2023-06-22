import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // This function pulls in the categories from Sanity backend and sets them to the categories state
  const getCategories = async () => {
    try {
      const categories = await client.fetch(
        `*[_type == "category"]{
          ...,
          "imageUrl": image.asset->url
        }`
      );
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.imageUrl}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
