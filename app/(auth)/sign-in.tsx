import FormControl from "@/shared/components/form-control/FormControl";
import TextField from "@/shared/components/text-field/TextField";
import React from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { View, Text, Alert, Platform } from "react-native";
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

const SignIn = () => {
  const formConfig = useForm<SignInFormType>({
    defaultValues: signInFormDefaultValues,
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmit = (values: any) => {
    console.log(values);
    // Alert.alert(JSON.stringify(values))
  };

  const theme = useTheme();

  return (
    <FormProvider {...formConfig}>
      <View style={styles.container}>
        
        <View  >
            <Text style={styles.title} >
                Generate PDF IA
            </Text>
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
          color={theme.colors.error}
        >
          Iniciar Sesion
        </Button>
      </View>
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
    gap: 5
  },
  containerTitle: {

  },
  title: {
    fontSize: 50,
    fontFamily: Platform.select(fontFamilies.Black),
    color: 'white',
    textAlign: 'center'
  }
});
