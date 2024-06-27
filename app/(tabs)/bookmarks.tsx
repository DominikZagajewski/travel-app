import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Bookmarks = () => {
  return (
    <View style={styles.container}>
      <Text>bookmarks</Text>
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
