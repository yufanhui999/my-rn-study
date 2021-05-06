import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';

function ImageBackgroundComponent(props) {
  const image = {uri: "https://reactnative.dev/img/tiny_logo.png"}
  return(
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    // background: "#000000a0"
  }
});

export default ImageBackgroundComponent