import { SafeAreaView } from "react-native";
import { MD2Colors, PaperProvider } from "react-native-paper";
import { router, Stack } from "expo-router";
import theme from "@/shared/theme/theme";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

const MainLayout = () => {
  // router.replace('/sign-in')
  useReactQueryDevTools(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#0066B1" style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: theme.colors.background,
              },
            }}
          />
        </SafeAreaView>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default MainLayout;
