import { Route } from '@/types/route';
import { routes } from '@/constants/route';
import { lazy } from 'react';

const protectRoute: Route[] = [
  {
    key: '/profile',
    path: routes.profile,
    component: lazy(() => import('@/pages/protect/Profile')),
  }
];

export default protectRoute;
