/* eslint-disable react/prop-types */
import {View, Text, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import tw from 'twrnc'
import {urlFor} from '../sanity'
import Icon from '@expo/vector-icons/FontAwesome5'
import {addToBasket, removeFromBasket, selectBasketItemWithId} from '../redux/BasketSlice'

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed] = useState(false)
  const dispatch = useDispatch()

  const items = useSelector((state) => selectBasketItemWithId(state, id))

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return

    dispatch(removeFromBasket({id}))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(true)}
        style={tw`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`text-gray-400 mt-2`}>currency</Text>
          </View>
          <Image
            source={{uri: urlFor(image).url()}}
            style={[tw`h-20 w-20 bg-gray-300 p-4`, {borderWidth: 1, borderColor: '#F3F3F4'}]}
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center space-x-2 pb-3`}>
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <Icon name="minus-circle" color={items.length > 0 ? '#00CCBB' : 'gray'} size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <Icon name="plus-circle" color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
