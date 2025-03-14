export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl?: string;
  role: "admin" | "user";
  userStatus: "active" | "blocked";
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
