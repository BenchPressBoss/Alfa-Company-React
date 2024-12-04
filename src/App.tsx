import { routeConfig } from '@routes/PageRoutesConfig'
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes
} from 'react-router-dom'

import { NotFound } from './components/screens/not-found/NotFound'
import { ProductDetails } from './components/screens/product-details/ProductDetails'
import { Products } from './components/screens/products/Products'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Navigate to={routeConfig.home} />} />

				<Route path={routeConfig.home} element={<Products />} />
				<Route path={routeConfig.product} element={<ProductDetails />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}
