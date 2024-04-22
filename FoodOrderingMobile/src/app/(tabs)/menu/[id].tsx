import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  //Dynamic routes by file name id in brackets - uselocalsearchparams hook for dynamic property - add dynamic proeprty 
  
  return (
    <View>
      <Stack.Screen options={{ title: 'Details: ' + id}} />
      <Text style={{fontSize: 20}}>Product Details Screen For ID: { id }</Text>
    </View>
  );
};

export default ProductDetailsScreen;
