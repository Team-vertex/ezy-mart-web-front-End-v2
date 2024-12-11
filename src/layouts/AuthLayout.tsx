import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="antialiased">
      <Header />
      <Outlet />
    </div>
  );
}
