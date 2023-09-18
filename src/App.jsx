import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Time from './pages/Time';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/products'
					element={<Products />}
				/>
				<Route
					path='/time'
					element={<Time />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
