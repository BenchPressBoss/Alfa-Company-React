import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '@styles/index.scss'

import { App } from './App.tsx'
import { persistor, store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>
)

const numbers = [1, 2, 3, 4, 5]

const [f, s, t] = numbers

console.log(f)
console.log(s)
console.log(t)
