import { ApiAdapter } from "@/shared/api/base.api";
import { useMutation } from "@tanstack/react-query";
import { IRegisterResponse } from "./responses/register.response";
import { IRegisterValues } from "./values/register.values";
import { AuthEndpoints } from "../../endpoints/auth.endpoints";
import { ILoginValues } from "./values/login.values";
import { AUTH_KEYS } from "./keys/auth.keys";
import useAuthStore from "@/shared/store/auth.store";

export const authService = () => {

  const apiAdapter = new ApiAdapter();
  const registerMutation = useMutation({
    mutationFn: (values: IRegisterValues) => {
      return apiAdapter.post<IRegisterResponse>(
        AuthEndpoints.register,
        values.body,
        undefined,
        undefined,
        false
      );
    },
    mutationKey: [AUTH_KEYS.REGISTER_MUTATION],
  });
  
  const loginMutation = useMutation({
    mutationFn: (values: ILoginValues) => {
      return apiAdapter.post<IRegisterResponse>(
        AuthEndpoints.login,
        values.body,
        undefined,
        undefined,
        false
      );
    },
    mutationKey: [AUTH_KEYS.LOGIN_MUTATION],
  });
  
  const getCurrentUserMutation = useMutation({
    mutationFn: () => {
      return apiAdapter.get<IRegisterResponse>(
        AuthEndpoints.getCurrentUser,
        undefined,
        undefined,
        true
      );
    },
    mutationKey: [AUTH_KEYS.USER_MUTATION],
  });

  return {
    registerMutation,
    loginMutation,
    getCurrentUserMutation,
  };
};
