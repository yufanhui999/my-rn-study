import React, { useState } from 'react';
import ActivityIndicatorComponent from './src/components/ActivityIndicator'
import ButtonComponent from "./src/components/Button";
import FlatListComponent from "./src/components/FlatList";
import { SafeAreaView } from 'react-native'
import ImageComponent from "./src/components/Image";
import ImageBackgroundComponent from "./src/components/ImageBackground";
import KeyboardAvoidingViewComponent from "./src/components/KeyboardAvoidingView";
import ModalComponent from './src/components/Modal'
import RefreshControlComponent from './src/components/RefreshControl'
import SectionListComponent from './src/components/SectionList'
import StatusBarComponent from './src/components/StatusBar'
import SwitchComponent from './src/components/Switch'
import AlertApi from './src/Api/Alert'
import AnimatedApi from './src/Api/Animated'
import AppStateExample from './src/Api/AppState'
import DemensionsExample from './src/Api/Dimensions'
import KeyboardExample from './src/Api/Keyboard'
import ShareExample from './src/Api/Share'
import StyleSheetExample from './src/Api/StyleSheet'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StyleSheetExample />
    </SafeAreaView>
    // <StatusBarComponent />

    // <ActivityIndicatorComponent />
    // <ButtonComponent />
    // <SafeAreaView style={{flex: 1, marginTop: 22}}>
    // <SafeAreaView>
    //   <SwitchComponent />
    // </SafeAreaView>
  )
}

export default App;
