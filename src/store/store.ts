import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productReducer from './slices/productSlice'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, productReducer)

export const store = configureStore({
	reducer: {
		product: persistedReducer
	}
})

export const persistor = persistStore(store)
