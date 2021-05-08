import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: 'My Home'}}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          // 传递给 options的参数是 具有一下属性的对象 {
          // navigation, route 
          // }
          options={({route}) => {
            console.log(route)
            return {
              title: route.params.name
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const ProfileScreen = (props) => {
  const { navigatiton, route} = props;

  return (
    <View>
      <Text>
        Profile: {route.params.title}
      </Text>
    </View>
  )
}

const HomeScreen = (props) => {
  const { navigation, route} = props;

  const toPages = () => {
    navigation.navigate(
      'Profile', 
      // 这个对象可以作为 route.params 传递给 options
      {
        name: 'my profile'
      }
    )
  }
  // 可以 使用 setOptions 来改变 options
  // 但是这个 option 更改的是当前Screen 的options
  const setOptions = () => {
    navigation.setOptions({
      title: 'My updated'
    })
  }
  return (
    <View>
      <Text>
        Home 
      </Text>
      <Button
        title= 'go'
        onPress={() => setOptions()}
      >
      </Button>
    </View>
  )
}

export default StackScreen