/* eslint-disable react/prop-types */
import {View, Text, Image} from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native'
import {urlFor} from '../sanity'
import tw from 'twrnc'
import {useNavigation} from '@react-navigation/native'
import Icon from '@expo/vector-icons/AntDesign'

const RestaurantCard = ({
  id,
  image,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurants', {
          id,
          image,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }}
      style={tw`bg-white mr-3 shadow`}
    >
      <Image source={{uri: urlFor(image).url()}} style={tw`h-36 w-64 rounded-sm`} />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center space-x-1`}>
          <Icon color="green" opacity={0.5} size={22} />
          <Text style={tw`text-xs text-gray-500`}>
            <Text style={tw`text-green-500`}>{rating}</Text> . {genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center space-x-1`}>
          <Icon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500`}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
