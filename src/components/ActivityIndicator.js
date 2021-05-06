import React, { Component } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'


// 显示一个圆形的 loading 效果
function ActivityIndicatorComponent(props) {
  return (
    <SafeAreaView style={[style.container, style.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size='large'/>
      <ActivityIndicator size='small' color='#0000ff' />
      <ActivityIndicator size='small' color='#0000ff' />
      <ActivityIndicator size='small' color='#00ff00' animating={false} />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

export default ActivityIndicatorComponent