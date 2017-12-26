export class User {
  apiKey: string;
  appName: string;
  authDomain: string;
  createdAt: string;
  dispalyName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt: string;
  phoneNumber: string;
  photoURL: string;
  providerData: any[];
  redirectEventId: string;
  stsTokenManager: {
    accessToken: string,
    apiKey: string,
    expirationTime: number,
    refreshToken: string
  };
  uid: string;
  chatIds: string[];
  friendIds: string[];
}
