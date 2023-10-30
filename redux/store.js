import {configureStore} from '@reduxjs/toolkit'
//import {combineReducers} from '@reduxjs/toolkit'

import restaurantReducer from './restaurantSlice'
import basketReducer from './BasketSlice'

//const reducer = combineReducers({restaurant: restaurantSlice})

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    basket: basketReducer,
  },
})
