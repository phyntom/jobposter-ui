import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import CartPage from './pages/CartPage';
import JobsPage from './pages/JobsPage';
import NewJob from './pages/NewJob';
import NotFound from './pages/NotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/new' element={<NewJob />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
