import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  //Dynamic routes by file name id in brackets - uselocalsearchparams hook for dynamic property - add dynamic proeprty 
  
  return (
    <View>
      <Text style={{fontSize: 20}}>Product Details Screen For ID: { id }</Text>
    </View>
  );
};

export default ProductDetailsScreen;
