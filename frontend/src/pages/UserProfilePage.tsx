import {useGetUserProfileData, useUpdateUser } from '@/api/UserApi';
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm';

const UserProfilePage = () => {
  const { currentUserData, isLoading: isGETloading } = useGetUserProfileData();
  const { updateUser, isLoading: isPUTloading } = useUpdateUser();

  if (isGETloading) return <span>Loading 🙄...</span>;

  if (!currentUserData) return <span>Unable to load user profile data 😫...</span>;

  return <UserProfileForm currentUserData={currentUserData} onSave={updateUser} isLoading={isPUTloading} />;
};

export default UserProfilePage;
