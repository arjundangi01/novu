import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutCompaniesInput;
};
