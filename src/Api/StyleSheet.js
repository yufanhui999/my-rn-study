import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const StyleSheetExample = () => {
  return (
    <View style={container}>
      <Text style={text}>React Native</Text>
    </View>
  )
}

// compose() 组合 样式表
// flatten() 推平样式，合并两个样式，相同属性，后面的属性值覆盖前面的。
const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#000'
  },
});

const lists = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
});

const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);

export default StyleSheetExample