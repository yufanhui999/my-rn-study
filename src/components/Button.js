import { Button, SafeAreaView, Alert } from 'react-native';
import React, { Component } from 'react';


function handlePress() {
  Alert.alert('Button');
}
// 按钮组件，配合定制
function ButtonComponent(props) {
  
  return (
    <SafeAreaView >
      <Button 
        title='learn more'
        color='#841584'
        accessibilityLabel='learn more about this purple button'
        onPress={() => handlePress()}>
      </Button>
    </SafeAreaView>
  )
}

export default ButtonComponent;