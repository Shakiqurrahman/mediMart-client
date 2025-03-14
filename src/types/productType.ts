export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category : string;
  isStock: boolean;
  requiredPrescriptions: boolean;
  manufacturer: string;
  expiryDate: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
};
