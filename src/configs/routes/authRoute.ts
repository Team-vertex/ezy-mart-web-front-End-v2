import { routes } from '@/constants/route';
import { Route } from '@/types/route';
import { lazy } from 'react';

const authRoute: Route[] = [
  {
    key: '/auth/sign-in',
    path: routes.signIn,
    component: lazy(() => import('@/pages/auth/SignIn')),
  },
  {
    key: '/auth/sign-up',
    path: routes.signUp,
    component: lazy(() => import('@/pages/auth/SignUp')),
  },
  {
    key: '/auth/otp-verify',
    path: routes.otpVerify,
    component: lazy(() => import('@/pages/auth/OtpVerify')),
  },
];

export default authRoute;
