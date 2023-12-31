export interface ProductProps {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
}
export interface StoreProduct {
    brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

export interface stateProps{
    productData : [];
    FavoriteData: [];
    userInfo : null | string;
    cart : any 
} 