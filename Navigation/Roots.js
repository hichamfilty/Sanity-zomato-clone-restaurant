import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import BascketScreen from '../screens/BascketScreen'
import DeliveryScreen from '../screens/DeliveryScreen'
import HomeScreen from '../screens/HomeScreen'
import PreparingOrderScreen from '../screens/PreparingOrderScreen'
import RestaurantScreen from '../screens/RestaurantScreen'

const Stack = createNativeStackNavigator()

const Roots = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantScreen} />
        <Stack.Screen
          name="Basket"
          component={BascketScreen}
          options={{presentation: 'modal', headerShowen: false}}
        />
        <Stack.Screen
          name="PreparingOrderScreen"
          component={PreparingOrderScreen}
          options={{presentation: 'fullScreenModal', headerShowen: false}}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{presentation: 'fullScreenModal', headerShowen: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Roots
