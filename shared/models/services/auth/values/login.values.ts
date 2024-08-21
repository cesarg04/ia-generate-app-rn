import { WithBody } from "@/shared/models/helpers/parse-values.helper";


export type ILoginValues = WithBody<{
  password: string;
  email: string;
}>;
