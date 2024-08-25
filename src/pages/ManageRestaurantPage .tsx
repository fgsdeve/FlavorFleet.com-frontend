import {
  useCreateMyRestaurant,
  useGetMyRestaurant, 
  useUpdateMyRestaurant
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantePage = () => {
  const { createRestaurant, isLoading: isCreateLoading} = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const {updateRestaurant, isLoading: IsUpdateLoading} = useUpdateMyRestaurant();

  const isEditing = !!restaurant;
   
  return (
    <ManageRestaurantForm 
    restaurant=
    {restaurant}
    onSave=
    {isEditing ? updateRestaurant : createRestaurant } 
    isLoading={isCreateLoading || IsUpdateLoading} />
  );
};

export default ManageRestaurantePage;
