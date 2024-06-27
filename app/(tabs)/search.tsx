import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
