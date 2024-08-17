
export type User = {
    _Id:string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export type Restaurant = {
    _id: string;
    user: string;
    restauratName: string;
    city: string;
    country: string;
    deliveryPrice: string;
    estimatedDeliveryTime: string;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;    
}

