import { MD2Colors, PaperProvider } from "react-native-paper";
import { router, Stack } from "expo-router";
import theme from "@/shared/theme/theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  MPLUSRounded1c_100Thin,
  MPLUSRounded1c_300Light,
  MPLUSRounded1c_400Regular,
  MPLUSRounded1c_500Medium,
  MPLUSRounded1c_700Bold,
  MPLUSRounded1c_800ExtraBold,
  MPLUSRounded1c_900Black,
} from "@expo-google-fonts/m-plus-rounded-1c";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import ModalContext from "@/shared/contexts/modal/ModalContext";
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const MainLayout = () => {
  useReactQueryDevTools(queryClient);
  let [loaded, error] = useFonts({
    MPLUSRounded1c_100Thin,
    MPLUSRounded1c_300Light,
    MPLUSRounded1c_400Regular,
    MPLUSRounded1c_500Medium,
    MPLUSRounded1c_700Bold,
    MPLUSRounded1c_800ExtraBold,
    MPLUSRounded1c_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <ModalContext>
          <StatusBar backgroundColor={theme.colors.background} style="light" />
          <SafeAreaView style={{ flex: 1 }}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: theme.colors.background,
                },
              }}
              initialRouteName="sign-in"
            />
          </SafeAreaView>
        </ModalContext>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default MainLayout;
