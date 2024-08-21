import { apiAdapter } from "@/shared/api/base.api";
import { useMutation } from "@tanstack/react-query";
import { IRegisterResponse } from "./responses/register.response";
import { IRegisterValues } from "./values/register.values";
import { AuthEndpoints } from "../../endpoints/auth.endpoints";
import { ILoginValues } from "./values/login.values";
import { AUTH_KEYS } from "./keys/auth.keys";

export const authService = () => {
  const registerMutation = useMutation({
    mutationFn: (values: IRegisterValues) => {
      return apiAdapter.post<IRegisterResponse>(
        AuthEndpoints.register,
        values.body
      );
    },
    mutationKey: [AUTH_KEYS.REGISTER_MUTATION],
  });

  const loginMutation = useMutation({
    mutationFn: (values: ILoginValues) => {
      return apiAdapter.post<IRegisterResponse>(
        AuthEndpoints.login,
        values.body
      );
    },
    mutationKey: [AUTH_KEYS.LOGIN_MUTATION],
  });

  const getCurrentUserMutation = useMutation({
    mutationFn: () => {
      return apiAdapter.get<IRegisterResponse>(AuthEndpoints.getCurrentUser);
    },
    mutationKey: [AUTH_KEYS.USER_MUTATION],
  });

  return {
    serviceMutation: registerMutation,
    loginMutation,
    getCurrentUserMutation,
  };
};
