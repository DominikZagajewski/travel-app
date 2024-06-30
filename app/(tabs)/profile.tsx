import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useDarkMode } from "@/app/DarkModeContext";

const Profile = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleLogout = () => {
    Alert.alert("Logged Out", "You have been logged out.");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <View
        style={[
          styles.container,
          isDarkMode ? styles.containerDark : styles.containerLight,
        ]}
      >
        <Text
          style={[
            styles.title,
            isDarkMode ? styles.titleDark : styles.titleLight,
          ]}
        >
          My Profile
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.profileImageContainer}
        >
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/lego/1.jpg",
            }}
            style={{ width: 60, height: 60, borderRadius: 10 }}
          />
        </TouchableOpacity>
        <View style={styles.optionContainer}>
          <Text
            style={[
              styles.optionText,
              isDarkMode ? styles.optionTextDark : styles.optionTextLight,
            ]}
          >
            Dark Mode{" "}
            <Ionicons
              name={isDarkMode ? "moon" : "sunny-outline"}
              size={24}
              color={isDarkMode ? Colors.white : Colors.black}
              style={{ marginLeft: 10 }}
            />
          </Text>
          <Switch
            trackColor={{ false: Colors.gray, true: Colors.black }}
            thumbColor={isDarkMode ? Colors.primaryColor : "#fff"}
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.logoutButton,
            isDarkMode ? styles.logoutButtonDark : styles.logoutButtonLight,
          ]}
          onPress={handleLogout}
        >
          <Text
            style={[
              styles.logoutButtonText,
              isDarkMode
                ? styles.logoutButtonTextDark
                : styles.logoutButtonTextLight,
            ]}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
  },
  containerLight: {
    backgroundColor: Colors.white,
  },
  containerDark: {
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  titleLight: {
    color: Colors.black,
  },
  titleDark: {
    color: Colors.white,
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 18,
  },
  optionTextLight: {
    color: Colors.black,
  },
  optionTextDark: {
    color: Colors.white,
  },
  logoutButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 100,
    alignSelf: "flex-start",
  },
  logoutButtonLight: {
    backgroundColor: Colors.primaryColor,
  },
  logoutButtonDark: {
    backgroundColor: Colors.gray,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButtonTextLight: {
    color: Colors.white,
  },
  logoutButtonTextDark: {
    color: Colors.black,
  },
});
