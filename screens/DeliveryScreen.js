/* eslint-disable no-unused-vars */
import {SafeAreaView, Text, Image, TouchableOpacity, View} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from '@expo/vector-icons/Octicons'
import {useNavigation} from '@react-navigation/native'
import * as Progress from 'react-native-progress'
// import MapView, {Marker} from 'react-native-maps'
import {useSelector} from 'react-redux'
import {selectRestaurant} from '../redux/restaurantSlice'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  return (
    <View style={tw`bg-[#00CCBB] flex-1`}>
      <SafeAreaView style={tw`z-50`}>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="x-circle" size={30} />
          </TouchableOpacity>
          <Text style={tw`font-light text-white text-lg`}>Order Help</Text>
        </View>
        <View Style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
              <Text styel={tw`text-4xl font-bold`}>30 Minutes</Text>
            </View>
            <Image
              source={{
                uri: 'https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/200w.gif',
              }}
              style={tw`h-20 w-20`}
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
        </View>
      </SafeAreaView>
      {/* <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={tw`flex-1 -mt-10 z-0`}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView> */}
      <SafeAreaView style={tw`bg-white flex-row items-center space-x-5 h-28`}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/media/EGIeHV4WoAA_qE6.jpg',
          }}
          style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5`}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`text-lg`}> auto Ilyas</Text>
          <Text style={tw`text-gray-400>Delivery companny`}></Text>
        </View>
        <Text style={tw`text-[#00CCBB] text-lg mr`}>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
