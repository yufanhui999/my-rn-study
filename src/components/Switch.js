import React, { Component, useState } from 'react';
import { Switch, View, StyleSheet } from 'react-native';

function SwitchComponent() {
  const [isEnabled, setIsEnabled] = useState(true)
  // const toggleSwitch = () => setIsEnabled(previsouState  => !previsouState)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 220,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SwitchComponent