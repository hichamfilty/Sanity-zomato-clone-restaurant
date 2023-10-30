import {View, Text, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import client from '../sanity'
import Icon from '@expo/vector-icons/AntDesign'
import tw from 'twrnc'
import RestaurantCard from './RestaurantCard'

const FeatureRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client
      .fetch(
        `
  *[_type == "featured" && _id == $id] {
    ...,
    restaurants[]->{
      ...,
      dishes[] ->,
      type-> {
        name
      }
        },
      }[0]
  `,
        {id}
      )
      .then((data) => {
        setRestaurants(data.restaurants)
      })
  }, [id])

  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <Icon name="back" color="#00CCBB" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >
        {restaurants
          ? restaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant._id}
                  id={restaurant._id}
                  image={restaurant.image}
                  title={restaurant.name}
                  rating={restaurant.rating}
                  genre={restaurant.type?.name}
                  address={restaurant.address}
                  short_description={restaurant.short_description}
                  dishes={restaurant.dishes}
                  long={restaurant.long}
                  lat={restaurant.lat}
                />
              )
            })
          : null}
      </ScrollView>
    </View>
  )
}

export default FeatureRow
