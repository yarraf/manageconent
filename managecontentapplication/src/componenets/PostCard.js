import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: "#f9f9f9",
    borderWidth: 0,
    // borderColor: "#ccc",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    // fontWeight: "bold",
    textAlign: "center",
  },
});