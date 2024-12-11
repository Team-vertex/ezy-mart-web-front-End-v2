import Loading from '@/components/core/Loading';
import AppRoute from '@/routes/AppRoute';
import { Suspense } from 'react';

export default function RootLayout() {
  return (
    <Suspense fallback={<Loading/>}>
      <AppRoute />
    </Suspense>
  );
}