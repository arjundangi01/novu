import { User } from "../user/User";

export type Company = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
