import React , {useEffect}from 'react';
import { TextInput,StyleSheet, Keyboard } from 'react-native';

function KeyboardExample() {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide)
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide)
    }
  }, [])

  const _keyboardDidShow = () => {
    alert("Keyboard Shown");
  };

  const _keyboardDidHide = () => {
    alert("Keyboard Hidden");
  };
  return (
    <TextInput 
      style={s.input}
      placeholder={'click here'}
      onSubmitEditing={Keyboard.dismiss}
    >

    </TextInput>
  )
}

const s = StyleSheet.create({
  input:{
   margin:60,
   padding: 10,
   borderWidth: 0.5,
   borderRadius: 4,
   backgroundColor: "#fff"
  }
})

export default KeyboardExample