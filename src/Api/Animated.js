import React, {useRef} from 'react';
import { View, Animated, Button, StyleSheet ,Text} from 'react-native';

function AnimatedApi() {
  // 引用 ref 
  const fadeAnim = useRef(new Animated.Value(0).current)

  const fadeIn = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000
      }
    ).start()
  }

  const fadeOut = () => {
    Animated.timing(
      fadeAnim, {
        toValue: 0,
        duration: 5000
      }
    ).start()
  }
  return (
    <View>
      <Animated.View
        style={[styles.fadingContainer, { opacity: fadeAnim }]}
      >
        <Text style={styles.fadingText}>Fading view</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title={'Fade in'} onPress={fadeIn}></Button>
        <Button title={'Fade out'} onPress={fadeOut}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});

export default AnimatedApi