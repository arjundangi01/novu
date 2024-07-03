import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};
