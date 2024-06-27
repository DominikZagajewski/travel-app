import { View, Text, StyleSheet, Touchable, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Destinations from "@/components/Destinations";

const Page = () => {
  const headerHeight = useHeaderHeight();
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
      <View style={(styles.container, { paddingTop: headerHeight })}>
        <Text style={styles.headingTxt}>
          {" "}
          {/* <br />
          Hi! .... <br /> */}
          Where we going?
        </Text>

        <View>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} />
            <TextInput placeholder="Search" />
          </View>
        </View>
        <Destinations listings={listingData} />
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
    fontWeight: 800,
    color: Colors.black,
    marginTop: 0,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
  },
});
