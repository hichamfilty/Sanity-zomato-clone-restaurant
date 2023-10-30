import {Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'twrnc'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import {useDispatch, useSelector} from 'react-redux'
import {selectRestaurant} from '../redux/restaurantSlice'
import {useNavigation} from '@react-navigation/native'
import {removeFromBasket, selectBasketItems, selectBasketTotal} from '../redux/BasketSlice'
import {Image} from 'react-native'
import {urlFor} from '../sanity'

const BascketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const basketTotal = useSelector(selectBasketTotal)
  const [groupItemsInBucket, setGroupItemsInBucket] = useState([])
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      // eslint-disable-next-line no-extra-semi
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})
    setGroupItemsInBucket(groupItems)
  }, [items])

  return (
    <SafeAreaView style={tw`flex-1 b-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View>
          <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
          <Text style={tw`text-center text-gray-400`}>{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
        >
          <Icon color="#00CCBB" name="alpha-x-circle" size={40} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://www.pngitem.com/pimgs/m/533-5338534_motor-21-philosophychicchic-home-delivery-service-bike-hd.png',
          }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />
        <Text style={tw`flex-1`}>Deliver in 30 minutes </Text>
        <TouchableOpacity>
          <Text style={tw`text-[#00CCBB]`}>Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {Object.entries(groupItemsInBucket).map(([key, items]) => {
          return (
            <View key={key} style={tw`flex-row items-center space-x-3 bg-white py-2 px-5`}>
              <Text style={tw`text-[#00CCBB]`}>{items.length}</Text>
              <Image
                source={{uri: urlFor(items[0]?.image).url()}}
                style={tw`h-12 w-12 rounded-full`}
              />
              <Text style={tw`flex-1`}>{items[0]?.name}</Text>
              <Text style={tw`text-gray-600`}>{items[0]?.price} dirhams</Text>
              <TouchableOpacity>
                <Text
                  style={tw`text-[#00CCBB] text-xs`}
                  onPress={() => dispatch(removeFromBasket({id: key}))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
      <View style={tw`p-5 bg-white mt-5 space-y-4`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-400`}>SubTotal</Text>
          <Text style={tw`text-gray-400`}>{basketTotal} Dirhams</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-gray-400`}>Delivery Fee</Text>
          <Text style={tw`text-gray-400`}>10 Dirhams</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Order Total</Text>
          <Text style={tw`font-extrabold`}>{basketTotal + 10} Dirhams</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PreparingOrderScreen')}
          style={tw`rounded-lg bg-[#00CCBB] p-4`}
        >
          <Text style={tw`text-center text-white text-lg font-bold`}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default BascketScreen
