/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useLayoutEffect} from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {setRestaurant} from '../redux/restaurantSlice'
import {useDispatch} from 'react-redux'
import tw from 'twrnc'
import {urlFor} from '../sanity'
import DishRow from '../components/DishRow'
import Icon from '@expo/vector-icons/FontAwesome5'
import BasketIcon from '../components/BasketIcon'

const RestaurantScreen = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const {
    params: {id, image, title, rating, genre, address, short_description, dishes, long, lat},
  } = useRoute()

  useEffect(() => {
    dispatch(
      setRestaurant({
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
    )
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View style={tw`relative`}>
          <Image source={{uri: urlFor(image).url()}} style={tw`w-full h-56 bg-gray-300 p-4`} />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
          >
            <Icon name="arrow-left" width={20} color="#00CCBB" />
          </TouchableOpacity>
          <View style={tw`bg-white`}>
            <View style={tw`px-4 pt-4`}>
              <Text style={tw`text-3xl font-bold`}>{title}</Text>
              <View style={tw`flex-row space-x-2 my-1`}>
                <View style={tw`flex-row item-center space-x-1`}>
                  <Icon name="star" color={'yellow'} size={22} />
                  <Text style={tw`text-xs text-gray-500`}>
                    <Text style={tw`text-xs text-gray-500`}>{rating}</Text> . {genre}
                  </Text>
                </View>
                <View>
                  <Icon name="map-marker-alt" size={22} color={'gray'} />
                  <Text style={tw`text-xs text-gray-500`}>
                    <Text style={tw`text-xs text-gray-500`}>Nearby . {address}</Text>
                  </Text>
                </View>
              </View>
              <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row bg-white items-center space-x-2 p-4 border-y border-gray-300">
            <Icon name="question-circle" color="gray" opacity={0.6} size={20} />
            <Text style={tw`pl-2 flex-1 text-md font-bold`}>Have a food allergy</Text>
            <Icon color="#00CCBB" name="arrow-right" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>
          {dishes
            ? dishes.map((dish) => {
                return (
                  <DishRow
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                  />
                )
              })
            : null}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen
