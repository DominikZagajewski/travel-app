import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
