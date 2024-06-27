import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Category = () => {
  return (
    <View style={styles.container}>
      <Text>category</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
