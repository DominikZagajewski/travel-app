import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";

type Props = {
  listings: any[];
};

const Destinations = () => {
  return (
    <View>
      <Text style={styles.title}>Popular Destinations</Text>
      <FlatList data={listings} renderItem={} />
    </View>
  );
};

export default Destinations;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: Colors.black,
  },
});
