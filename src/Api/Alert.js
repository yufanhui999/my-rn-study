import React, { Component } from 'react';
import { Alert, Button, View } from 'react-native';

const createTwoBtnAlert = () => {
  Alert.alert(
    'Alert title',
    'msg Alert msg',
    [
      {
        text: 'Cancel',
        onPress() {
          console.log('cancel pressed')
        }
      },
      {
        text: 'OK',
        onPress() {
          console.log('ok')
        }
      },
      {
        text: 'ask me later'
      }
    ]
  )
}

const AlertApi = () => {
  return (
    <View>
      <Button title={'2-Button Alert'} onPress={createTwoBtnAlert}></Button>
      <Button title={'3-Button Alert'}></Button>
    </View>
  )
}

export default AlertApi