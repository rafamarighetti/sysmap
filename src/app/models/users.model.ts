export interface Users {
  id: number;
  email: string;
  username: string;
  favorite: boolean;
}

export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string,
  website: string
  company: {
    name: string;
  };
}

