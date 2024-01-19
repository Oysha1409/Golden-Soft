import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Category, Home, Order, Product, Trade } from './pages';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product/>
    },
    {
      path: '/product/:type',
      element: <Product />,
    },
    {
      path: '/category',
      element: <Category />,
    },

    {
      path: '/order',
      element: <Order />,
    },
    {
      path: '/trade',
      element: <Trade />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
