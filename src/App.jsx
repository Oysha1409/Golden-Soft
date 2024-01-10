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
      path: '/category/:type',
      element: <Category />,
    },
    {
      path: '/product',
      element: <Product />,
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
