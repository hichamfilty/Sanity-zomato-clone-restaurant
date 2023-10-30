import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import {useSelector} from 'react-redux'
import {selectBasketItems, selectBasketTotal} from '../redux/BasketSlice'
import {useNavigation} from '@react-navigation/native'

const BasketIcon = () => {
  const items = useSelector(selectBasketItems)
  const navigation = useNavigation()
  const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return null

  return (
    <View style={tw`absolute bottom-10 w-full z-50`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        style={tw`mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row`}
      >
        <Text style={tw`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2`}>
          {items.length}
        </Text>
        <Text style={tw`flex-1 text-white font-extrabold text-lg text-center`}>View Basket</Text>
        <Text style={tw`text-ld text-white font-extrabold`}>{basketTotal} Dirhams</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
