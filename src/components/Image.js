import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native'

function ImageComponent(props) {
  return (
    <View style={style.container}>
      <Image 
        style={style.tinyLogo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      ></Image>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 66,
    height: 58
  }
})

export default ImageComponent