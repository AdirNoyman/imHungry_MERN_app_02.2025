import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'react-query';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    // Check if the backend response is ok (created the user in the DB)
    if (!response.ok) {
      throw new Error('Failed to create the user in the app DB 😫');
    }   
  };

  const {
    // createUser is the name we give the mutation we make (createUserRequest)
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

type UpdateUserRequest = {
  name: string;
  address: string;
  city: string;
  country: string;
};

export const useUpdateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateUserRequest = async (formData: UpdateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: 'PUT',
      headers: {        
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the backend response is ok (updated the user in the DB)
    if (!response.ok) {
      throw new Error('Failed to update the user in the app DB 😫');
    }

    return response.json();
  };

  const {
    // updateUser is the name we give the mutation we make (updateUserRequest)
    mutateAsync: updateUser,
    isLoading,
    isError,
    isSuccess,
    reset
  } = useMutation(updateUserRequest);

  return {
    updateUser,
    isLoading,
    isError,
    isSuccess,
    reset
  };
};
