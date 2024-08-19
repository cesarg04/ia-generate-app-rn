import { View, Text, ActivityIndicator } from "react-native";
import { MD2Colors, PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Drawer } from 'expo-router/drawer';
import { router, Stack } from "expo-router";
import theme from "@/shared/theme/theme";

const MainLayout = () => {

  // router.replace('/sign-in')
  return (
    <PaperProvider theme={theme} >
      <SafeAreaView style={{ flex: 1 }} >
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </PaperProvider>
  )
}

export default MainLayout;