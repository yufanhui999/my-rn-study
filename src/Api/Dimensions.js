// 获取设备宽高

// react-native hook useWindowDimensions 获取设备宽高
import React, {useState, useEffect} from 'react';
import { Dimensions, Text,View } from 'react-native'

const window = Dimensions.get('window')
const screen = Dimensions.get('screen')

function DimensionsExample() {
  const [dimensions, setDimensions] = useState({window, screen})
  const onChange = (res) => {
    setDimensions(res)
  }

  useEffect(() => {
    Dimensions.addEventListener('change', onChange)
    return () => {
      Dimension.removeEventListener('change', onChange)
    }
  }, [])
  return (
    <View>
     <Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
      <Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text>
    </View>
  )
}

export default DimensionsExample