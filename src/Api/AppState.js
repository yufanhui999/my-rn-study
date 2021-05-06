// 获取应用是在前台，还是在后台，状态变化时通知。
// AppState.currentState
import React, {useRef, useEffect, useState} from 'react';
import { AppState ,View, Text } from 'react-native';

 function AppStateExample() {
   const appState = useRef(AppState.currentState)
   const [appStateVisible, setAppStateVisible] = useState(appState.current)

   useEffect(() => {
     AppState.addEventListener('change', handleAppStateChange)
     return () => {
       AppState.removeEventListener('change', handleAppStateChange)
     }
   }, [])

   function handleAppStateChange(nextAppState) {
     if(appState.current.match(/inactive|background/) && nextAppState === 'active') {
       console.log('app has come to the foreground')
     }

     appState.current = nextAppState;
     setAppStateVisible(appState.current);
     console.log('app state',  appState.current)
   }
   return (
     <View>
       <Text>{appStateVisible}</Text>
     </View>
   )
 }

 export default AppStateExample