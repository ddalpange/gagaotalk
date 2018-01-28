export interface User {
  key: string;
  uid: string;
  apiKey: string;
  appName: string;
  authDomain: string;
  createdAt: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt: string;
  phoneNumber: string;
  photoURL: string;
  ownChatIds: string[];
  providerData: any[];
  redirectEventId: string;
  stsTokenManager: {
    accessToken: string,
    apiKey: string,
    expirationTime: number,
    refreshToken: string
  };
}
