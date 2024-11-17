import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className={`font-poppins min-h-svh`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
