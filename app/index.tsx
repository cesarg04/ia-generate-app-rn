import { ApiAdapter } from "@/shared/api/api-adapter";
import { authService } from "@/shared/models/services/auth/auth.service";
import useAuthStore from "@/shared/store/auth.store";
import theme from "@/shared/theme/theme";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

const index = () => {
  const router = useRouter();
  const { getCurrentUserMutation } = authService()
  const { login } = useAuthStore()

  useEffect(() => {
    const mute = async() => {
      try {
        const mutation =  await getCurrentUserMutation.mutateAsync()
        login(mutation.user, mutation.token)
        router.replace('resources')
        
      } catch (error) {
        console.log(error)
        router.replace("/sign-in");
      }
    }
    mute()
  }, []);

  const onNavigate = () => {
    router.push("/sign-in");
  };

  return (
    <View style={styles.container} >
      <ActivityIndicator size={100} color={theme.colors.primary} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
})
