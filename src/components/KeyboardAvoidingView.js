import React, { Component } from 'react';
import {
  Button,
  Keyboard, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Text,
  Platform,
  TextInput,
  View,
  TouchableWithoutFeedback } from 'react-native';

function KeyboardAvoidingViewComponent(props) {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={style.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.inner}>
          <Text>Header</Text>
          <TextInput placeholder='Username' style={style.textInput} />
          <View style={style.btnContainer}>
            <Button title="Submit" onPress={() => null}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default KeyboardAvoidingViewComponent