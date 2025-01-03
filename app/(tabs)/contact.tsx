import { View, Text, StyleSheet } from "react-native";
import React from "react";

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a coffee shop in Medan</Text>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "semibold",
    textAlign: "center",
  },
});
