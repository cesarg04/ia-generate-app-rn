import FormControl from "@/shared/components/form-control/FormControl";
import TextField from "@/shared/components/text-field/TextField";
import React, { useEffect } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { View, Text, Alert, Platform, ScrollView } from "react-native";
import { MD3Theme, TextInput, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import Button from "@/shared/components/buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signInFormDefaultValues,
  signInFormSchema,
  SignInFormType,
} from "@/public/auth/sign-in/util/schema.util";
import FormError from "@/shared/components/form-error/FormError";
import FormLabel from "@/shared/components/form-label/FormLabel";
import { fontFamilies } from "@/shared/constants/fonts.const";
import { authService } from "@/shared/models/services/auth/auth.service";
import useAlert from "@/shared/hooks/useAlert";
import theme from "@/shared/theme/theme";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { EModalEventType } from "@/shared/contexts/modal/modal-context.types";
import useAuthStore from "@/shared/store/auth.store";

const SignIn = () => {
  const router = useRouter();
  const { loginMutation } = authService();
  const { alert } = useAlert();
  const { login, user, token } = useAuthStore();
  const formConfig = useForm<SignInFormType>({
    defaultValues: signInFormDefaultValues,
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmit = async (values: SignInFormType) => {
    try {
      const { data } = await loginMutation.mutateAsync({ body: { ...values } });
      await SecureStore.setItemAsync("token", data.token);
      alert({
        message: "Usuario creado satisfactoriamente",
        type: "info",
      }).then((res) => {
        if (res.type === EModalEventType.CONFIRM) {
          login(data.user, data.token);
          router.replace('/resources')
        }
      });
    } catch (error: any) {
      alert({
        message: error.response.data ?? "Error al iniciar sesion",
        type: "error",
      });
    }
  };

  return (
    <FormProvider {...formConfig}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Generate PDF IA</Text>
          </View>

          <FormControl name="email">
            <FormLabel>Correo electronico</FormLabel>
            <TextField />
            <FormError />
          </FormControl>

          <FormControl name="password">
            <FormLabel>Contraseña</FormLabel>
            <TextField type="pass" />
            <FormError />
          </FormControl>

          <Button
            mode="contained"
            onPress={formConfig.handleSubmit(onSubmit)}
            color={theme.colors.primary}
            isLoading={formConfig.formState.isSubmitting}
            disabled={formConfig.formState.isSubmitting}
          >
            Iniciar Sesion
          </Button>

          <View style={{ marginTop: 20 }}>
            <Button onPress={() => router.replace("/register")}>
              Registrarse
            </Button>
          </View>
        </View>
      </ScrollView>
    </FormProvider>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    gap: 5,
  },
  containerTitle: {},
  title: {
    fontSize: 50,
    fontFamily: Platform.select(fontFamilies.Black),
    color: "white",
    textAlign: "center",
  },
});
