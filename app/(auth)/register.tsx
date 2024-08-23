import {
  registerFormDefaultValues,
  registerFormSchema,
  RegisterFormType,
} from "@/public/auth/register/util/schema.util";
import Button from "@/shared/components/buttons/Button";
import FormControl from "@/shared/components/form-control/FormControl";
import FormError from "@/shared/components/form-error/FormError";
import FormLabel from "@/shared/components/form-label/FormLabel";
import KeyboardAvoidingContainer from "@/shared/components/keyboard-avoing-container/KeyboardAvoingContainer";
import TextField from "@/shared/components/text-field/TextField";
import { fontFamilies } from "@/shared/constants/fonts.const";
import useAlert from "@/shared/hooks/useAlert";
import { authService } from "@/shared/models/services/auth/auth.service";
import theme from "@/shared/theme/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRoute } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { FormProvider, useForm } from "react-hook-form";
import { Platform, ScrollView, View, StyleSheet, Text } from "react-native";

const Register = () => {
  const router = useRouter();
  const { registerMutation } = authService();
  const { alert } = useAlert();
  const formConfig = useForm<RegisterFormType>({
    defaultValues: registerFormDefaultValues,
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = async (values: RegisterFormType) => {
    console.log(values);
    try {
      const mutation = await registerMutation.mutateAsync({ body: values });
      alert({
        message: "Usuario creado satisfactoriamente",
        type: "info",
      });
    } catch (error: any) {
      alert({
        message: error.response.data,
        type: "error",
      }).then((data) => {
        console.log();
      });
    }
    // Alert.alert(JSON.stringify(values))
  };

  return (
    <FormProvider {...formConfig}>
      <KeyboardAvoidingContainer>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Generate PDF IA</Text>
          </View>

          <FormControl name="name">
            <FormLabel>Nombre completo</FormLabel>
            <TextField />
            <FormError />
          </FormControl>

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
          >
            Registrarse
          </Button>

          <View style={{ marginTop: 20 }}>
            <Button onPress={() => router.replace("/sign-in")}>
              Iniciar sesion
            </Button>
          </View>
        </View>
      </KeyboardAvoidingContainer>
    </FormProvider>
  );
};

export default Register;

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
