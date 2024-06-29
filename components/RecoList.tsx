import { ListRenderItem, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RecoType } from "./types/recoType";
import { FlatList } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const RecoList = ({ listings }: { listings: RecoType[] }) => {
  const renderItem: ListRenderItem<RecoType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.itemContent}>
          <Text style={styles.itemTxt}>{item.name}</Text>
          <View style={styles.itemInfo}>
            <Ionicons name="star" size={20} color={Colors.primaryColor} />
            <Text style={styles.itemRating}>{item.rating}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendation</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

export default RecoList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  listContentContainer: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 8,
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    marginLeft: 5,
  },
  itemLocation: {
    fontSize: 14,
    color: Colors.black,
    marginLeft: 10,
  },
});
