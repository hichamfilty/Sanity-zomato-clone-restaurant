/* eslint-disable react/prop-types */
import {TouchableOpacity, Image, Text} from 'react-native'
import React from 'react'
import tw from 'twrnc'

const CategoriesCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={tw`h-20 w-20 rounded`}
      />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard
