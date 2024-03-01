import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import css from './Layout.module.css';
import Footer from './Footer/Footer';

export const Layout = () => {
  return (
    <div className={css.containerMain}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};
