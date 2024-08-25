import theme from "@/shared/theme/theme";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import DrawerListRender from "@/private/modules/resources/components/DrawerListRender";
import HeaderComponent from "@/private/modules/resources/components/Header";

const MainLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          // drawerLabel: () => null,
          drawerStyle: {
            backgroundColor: theme.colors.background,
          },
          drawerContentContainerStyle: {
            backgroundColor: theme.colors.background,
          },
          sceneContainerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerBackgroundContainerStyle: {
            backgroundColor: theme.colors.background,
          },
          header: () =>  <HeaderComponent/>
        }}
        drawerContent={() => <DrawerListRender />}
        
      ></Drawer>
    </GestureHandlerRootView>
  );
};

export default MainLayout;
