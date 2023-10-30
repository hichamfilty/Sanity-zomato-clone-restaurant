/* eslint-disable no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
import {Text, SafeAreaView, TextInput, View, Image, ScrollView} from 'react-native'
import React, {useState, useLayoutEffect, useEffect} from 'react'

import Icon from '@expo/vector-icons/AntDesign'
import tw from 'twrnc'
import {useNavigation} from '@react-navigation/native'
import client from '../sanity'
import FeatureRow from '../components/FeatureRow'
import Categories from '../components/Categories'

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([])
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: false,
    })
  })

  useEffect(() => {}, [
    client
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[] ->
        }
      }`
      )
      .then((data) => {
        setFeaturedCategories(data)
      }),
  ])

  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      <View style={tw`flex-row pb-3 space-x-2 items-center mx-4`}>
        <View style={tw`flex flex-row flex-1 items-center`}>
          <Image
            source={{
              uri: 'https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg',
            }}
            style={tw`h-15 w-15 bg-gray-300 p-4 rounded-full`}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
            <Text style={tw`font-bold text-xl`}>
              Current Location
              <Icon name="downcircleo" size={20} color="#00CCBB" />
            </Text>
          </View>
          <Icon name="user" size={35} color="" />
        </View>
      </View>

      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4`}>
        <View style={tw`flex-row space-x-2 flex-1 bg-gray-200 p-3`}>
          <Icon name="search1" color="gray" size={20} />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
        <Icon name="retweet" color="#00CCBB" size={20} />
      </View>
      <ScrollView style={tw`bg-gray-100`} contentContainerStyle={{paddingBottom: 100}}>
        <Categories />
        {featuredCategories?.map((category) => {
          return (
            <FeatureRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
