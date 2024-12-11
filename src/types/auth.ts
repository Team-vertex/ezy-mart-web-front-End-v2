export interface ICredential {
  email: string;
  password: string;
}

export interface IOtp {
  email: string;
  otp: string;
}

export interface IResendOtp {
  email: string;
}

export interface IRegister {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  password?: string;
  gender?: string;
  externalSignUp?: boolean;
  profile_pic?: string;
}

export interface IUserProfile {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobile: string;
  email: string;
  profile_pic: string | null;
  cover_pic: string | null;
  gender: string;
  birthDay: string | null;
}

export interface IUser {
  externalSignUp?: boolean;
  _id?: string;
  userID?: string;
  firstName?: string;
  middleName?: string | null;
  lastName?: string;
  mobile?: string;
  email?: string;
  password?: string;
}

export interface SignInResponse {
  user: IUser;
  token: string;
}

export interface iGoogleSignIn {
  email: string;
}
export interface iGoogleSignInResponse {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobile: string;
  email: string;
  profile_pic: string;
  cover_pic: string;
  gender: string;
  birthDay: string | null;
  ABN_Number: string | null;
  roleId: number;
  isVerifiedUser: boolean;
  isTasker: true;
  bio: string | null;
  about: string | null;
  education: [];
  createdAt: string | null;
  updatedAt: string | null;
  token: string;
  verification: {
    isBankVerified: boolean;
    isAddressVerified: boolean;
    isCategoryVerified: boolean;
  };
}

export interface IGoogleData {
  accessToken: string;
  displayName: string | null;
  email: string;
  photoURL: string;
  uid: string;
  isExternalSignUp: boolean;
  firstName: string;
  lastName: string;
}
