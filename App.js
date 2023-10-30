/* eslint-disable react/style-prop-object */

import React from 'react'
//import 'react-native-url-polyfill/auto'
//import {setupURLPolyfill} from 'react-native-url-polyfill'

import {StatusBar} from 'expo-status-bar'

import Roots from './Navigation/Roots'
import {Provider} from 'react-redux'
import {store} from './redux/store'

export default function App() {
  //setupURLPolyfill()
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <Roots />
    </Provider>
  )
}
