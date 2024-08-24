import { authService } from "@/shared/models/services/auth/auth.service";
import theme from "@/shared/theme/theme";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";

const index = () => {
  const router = useRouter();
  const { getCurrentUserMutation } = authService()

  useEffect(() => {
    const mute = async() => {
      try {
        const mutation =  await getCurrentUserMutation.mutateAsync()
        console.log('muation', mutation.data.token)
        router.replace('resources')
        
      } catch (error) {
        console.log(error)
        router.replace("/sign-in");
      }
    }
    mute()
  }, []);

  const onNavigate = () => {
    console.log("Navigate");
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
