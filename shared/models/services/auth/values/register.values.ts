import { WithBody } from "@/shared/models/helpers/parse-values.helper";


export type IRegisterValues = WithBody<{
  name: string;
  password: string;
  email: string;
}>;
