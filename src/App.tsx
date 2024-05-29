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
import NewJob from './pages/NewJobPage';
import NotFound from './pages/NotFound';
import JobPage from './pages/JobPage';
import NewJobPage from './pages/NewJobPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs/add' element={<NewJob />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} />
        <Route path='/new' element={<NewJobPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
