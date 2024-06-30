import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Listings from "@/components/Listings";
import listingData from "@/data/destenations.json";
import RecoList from "@/components/RecoList";
import reco from "@/data/reco.json";
import { useDarkMode } from "@/app/DarkModeContext";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");
  const { isDarkMode } = useDarkMode();

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
      <View
        style={[
          styles.container,
          { paddingTop: headerHeight },
          isDarkMode ? styles.containerDark : styles.containerLight,
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={[
              styles.headingTxt,
              isDarkMode ? styles.textDark : styles.textLight,
            ]}
          >
            Where are we going?
          </Text>
          <View>
            <View
              style={[
                styles.searchBar,
                isDarkMode ? styles.searchBarDark : styles.searchBarLight,
              ]}
            >
              <Ionicons
                name="search"
                size={18}
                color={isDarkMode ? Colors.white : Colors.black}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor={isDarkMode ? Colors.white : Colors.black}
                style={{
                  flex: 1,
                  color: isDarkMode ? Colors.white : Colors.black,
                }}
              />
            </View>
          </View>

          <Text
            style={[
              styles.recommendationTitle,
              isDarkMode ? styles.textDark : styles.textLight,
            ]}
          >
            Popular Destinations
          </Text>
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
  },
  containerLight: {
    backgroundColor: Colors.bgColor,
  },
  containerDark: {
    backgroundColor: Colors.black,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 0,
  },
  textLight: {
    color: Colors.black,
  },
  textDark: {
    color: Colors.white,
  },
  searchBar: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  searchBarLight: {
    backgroundColor: Colors.white,
  },
  searchBarDark: {
    backgroundColor: Colors.gray,
  },
  recommendationTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
});
