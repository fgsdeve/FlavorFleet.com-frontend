import { useAuth0, User } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();
try{
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

  const { 
    data: 
    currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getMyUserRequest);

  if(error) {
    toast.error(error.toString());
  }

  return{
    currentUser,
    isLoading
  }
};

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};


export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response;
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

type UpdateMyUserRequest = {
  name: string,
  addressLine1: string,
  city: string,
  country: string;
};

  export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
      try {
        const accessToken = await getAccessTokenSilently();
  
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          const errorResponse = await response.json();
          console.error("Failed to update user:", errorResponse);
          throw new Error(`Failed to update user: ${response.statusText}`);
        }
  
        return response.json(); // Return updated user data
      } catch (error) {
        console.error("Error in updateMyUserRequest:", error);
        throw error;
      }
    };
  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateMyUserRequest);

  if (isSuccess) {
    toast.
      success('user profile updated');
  }
  if (error) {
    toast
      .error(error.toString());
    reset();
  }

  return {
    updateUser,
    isLoading,
    error,
  };

}
