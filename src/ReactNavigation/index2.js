import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
        title='Go to Details' 
        onPress={()=> navigation.navigate('Details')}
      >
      </Button>
    </View>
  )
}

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Details Screen
      </Text>
      {/* 不会重复跳转，因为当前已经是Details 页面了 do nothing */}
      <Button 
        title='Go to Details ...again' 
        // push 每次都会想导航栈中添加一条， navigate 会先查看是否已经有该名称的路由，没有新路由的时候才会增加一条到栈中
        // push 在栈中增加， navigate 导航到栈中的某一个页面 popToTop 返回到栈中的第一个。
        onPress={()=> navigation.push('Details')}
      >
      </Button>
      <Button 
        title="Go Back"
        onPress={()=> navigation.goBack()}
      >
      </Button>
      <Button
        title='go back to first screen in stack'
        onPress={() => navigation.popToTop()}
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
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index