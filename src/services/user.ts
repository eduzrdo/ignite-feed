import { api } from '../api';

export interface UserPreview {
  id: string;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  picture: string;
}

interface User {
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other' | '';
  email: string;
  dateOfBirth: Date; // convert to ISOString before send request
  phone: string;
  picture: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: number; // convert to a string like "-3:00"
  };
}

export interface UserResponse extends User {
  id: string;
  registerDate: string;
  updatedDate: string;
}

export async function createUser(user: User) {
  const response = await api.post<UserResponse>('/user/create', {
    ...user,
    dateOfBirth: user.dateOfBirth.toISOString(),
    location: {
      ...user.location,
      timezone: user.location.timezone + ':00',
    },
  });

  return response.data;
}

export async function getUser(userId: string) {
  const response = await api.get<UserResponse>(`/user/${userId}`);
  return response.data;
}
