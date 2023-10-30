import {ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import client, {urlFor} from '../sanity'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client
      .fetch(
        `
  *[_type == "category"]
  `
      )
      .then((data) => {
        setCategories(data)
      })
  }, [])

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {
        return (
          <CategoriesCard
            key={category._id}
            imgUrl={urlFor(category.image).width(200).url()}
            title={category.name}
          />
        )
      })}
    </ScrollView>
  )
}

export default Categories
