// 怎样向嵌套路由发送消息。
// passing params to a previous screen 
// navigation.navigate('Home', {
//  screen: 'Nested Navigator'
// })
import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

const HomeScreen = (props) => {
  const { navigation, route } = props

  // 在这里设置监听 route params. 可以做一些事情。like post server
  useEffect(() => {
    if(navigation.params?.post) {
      // do something with `route.params.post` like send the post to the server
    }
  }, [route.params?.post])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
        title='Create post' 
        onPress={()=> {
          navigation.navigate('CreatePost', {
            // route params, 增加一个参数，object
            itemId: 86,
            otherParam:  'other params'
          })
        }}
      >
      </Button>
      <Text>
        Post {route.params?.post}
      </Text>
    </View>
  )
}

const CreatePostScreen  = (props) => {
  const { navigation, route } = props
  const [postText, setPostText] = useState('')
  // 可以使用 navigation.setParams({}) 来更新参数
  // 
  return (
    <View>
      <TextInput
        multiline
        placeholder='what’s on your mind'
        style={{ height: 200, paddingTop: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      >
      </TextInput>
      <Button
        title="Done"
        onPress={
          () => {
            navigation.navigate({
              name: 'Home',
              params: {
                post: postText
              },
              merge: true
            })
          }
        }
      >
      </Button>
    </View>
  )
}

const Index = () => {
  return (
    <NavigationContainer initialRouteName='Home'>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={ HomeScreen }
          options={{ title: 'Overview' }}
        />
        <Stack.Screen 
          name='CreatePost' 
          component={CreatePostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index