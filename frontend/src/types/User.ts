export type User = {
// _id is the mongoDB user Id and not the one from Auth0
  _id: string;
  email: string;
  name: string;
  address: string;
  city: string;
  country: string;
};
