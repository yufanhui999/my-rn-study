import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Button, Text, TextInput, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();


function LogoTitle() {
  return (
    <Image
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      style={{width: 50, height: 50}}
    />
  )
}

function ProfileScreen(props) {
  const { navigation ,route } = props
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    console.log('ssssss')
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button onPress={() => setCount(c => c+1)} title='Update count'></Button>
        )
      }
    })
  }, [navigation])

  return (
    <View>
      <Text>
        Count: {count}
      </Text>
    </View>
  )
}

function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            // 可以用来更改一些 header 样式
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        /> */}
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          // 传递给 options的参数是 具有一下属性的对象 {
          options={
            {
              headerTitle: props => <LogoTitle {...props }/>,
              // headerRight: () => (
              //   <Button 
              //     onPress={() => alert('this is a button')}
              //     title={'info'}
              //     color='#333'
              //   />
              // )
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackScreen