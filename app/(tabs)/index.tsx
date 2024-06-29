import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Listings from "@/components/Listings";
import listingData from "@/data/destenations.json";
import RecoList from "@/components/RecoList";
import reco from "@/data/reco.json";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    console.log("Category: ", category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/lego/1.jpg",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                margin: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#1711717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>Where are we going?</Text>
          <View>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={18} />
              <TextInput placeholder="Search" style={{ flex: 1 }} />
            </View>
          </View>

          <Text style={styles.recommendationTitle}>Popular Destinations</Text>
          <Listings listings={listingData} category={category} />
          <RecoList listings={reco} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 0,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  recommendationTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
});
