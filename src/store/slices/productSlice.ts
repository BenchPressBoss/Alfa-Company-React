import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Product = {
	id: number
	img: string
	name: string
	price: number
}

type ProductState = {
	products: Product[]
	loading: boolean
}

const initialState: ProductState = {
	products: [],
	loading: false
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<Product>) => {
			state.products.push(action.payload)
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(
				product => product.id !== action.payload
			)
		}
	}
})

export const { addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer
