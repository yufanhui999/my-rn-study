import React, { useState } from 'react';
import { 
  FlatList, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet,
  View,
  TouchableOpacity,
  Text } from 'react-native'
// 简单的列表组件

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


// 这个地方参数要解构出来。 { item, index, separators }


function FlatListComponent(prop) {
  const [selectedId, setSelectedId] = useState(null);

  // renderItem 最好是写在 函数里面，这样可以用到一些hook.
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff'
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[style.item,{ backgroundColor } ]}>
        <Text style={style.title}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={style.container}>
      {/* FlatList 是PureComponent,
      如果没有属性更新的话，是不会更新的 ,
      所有额外增加了一个属性， extraData={selectedId}
      */}

      {/* PureComponent 知识额外补充，上传至掘金 */}
  
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      >
      </FlatList>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#333'
  }
})

export default FlatListComponent;
