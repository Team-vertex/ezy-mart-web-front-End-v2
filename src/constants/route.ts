export const routes = {
  signIn: '/auth/sign-in',
  signUp: '/auth/sign-up',
  otpVerify: '/auth/otp-verify',

  //PROTECT
  profile: '/profile',

  //PUBLIC
  home: '/',
  serviceForBusiness: '/service/business',
  customersService: '/service/CutomersService',
};

export const api = {
  //AUTH
  sign_in: 'auth/web-token',
  sign_up: 'auth/register',
  auth_verify_otp: 'auth/verify-otp',
  auth_resend_otp: 'auth/resend-otp',
  profile: 'user',
  google_sign_in: 'auth/google-reg',

  //COMMON
  image_upload: 'upload/image',
};
