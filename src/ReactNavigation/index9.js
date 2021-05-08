import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// react navigation lifecyle events
// focus: comes
// blur: goes away
// nesting navigators 
function Home(props) {
  const { navigation } = props
  // 这里也可以直接使用 useFocusEffect
  useEffect(() => {
    return () => {
      navigation.addListener('focus', () => {
        console.log('comes')
      })
    }
  }, [navigation])
  return (
    <Tab.Navigator>
      <Tab.Screen name='Feed' component={Feed} />
      <Tab.Screen name='Messages' component={Messages} />
    </Tab.Navigator>
  )
}

const Feed = (props) => {
  const { navigation } = props
  useEffect(() => {
    return () => {
      navigation.addListener('focus', () => {
        console.log('comes')
      })
    }
  }, [navigation])
  return (
    <Text>Feed</Text>
  )
}

const Messages = () => {
  return (
    <Text>Messages</Text>
  )
}

function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        {/* <Stack.Screen name='Profile' component={Profile}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackScreen