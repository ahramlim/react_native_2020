import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#05E7B5", "#0470DA"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#88F6FE", "#66A7FE"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#06BCFA", "#0652EA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#77DDFE", "#AEADDF"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Bye.."
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "What the Atmosphere?",
    subtitle: "Just stay at home"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FFED49", "#FF6A05"],
    title: "Sunny Day",
    subtitle: "Get out, now!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#C1BFC0", "#2D3D4A"],
    title: "Clouds",
    subtitle: "I know, just boring"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#eef2f3", "#8e9eab"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on."
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#425995", "#1A2B61"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻"
  }
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={150}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 60,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left"
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left"
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  }
});
