import useAlert from "@/shared/hooks/useAlert";
import { resourcesServices } from "@/shared/models/services/resources/resources.service";
import theme from "@/shared/theme/theme";
import { router, usePathname, useRouter } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Drawer, Searchbar } from "react-native-paper";
import * as SecureStorage from "expo-secure-store";
import useAuthStore from "@/shared/store/auth.store";

const DrawerListRender = () => {
  const { getListResources } = resourcesServices();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { alert } = useAlert();
  const { logout } = useAuthStore();
  const pathname = usePathname();
  const navigation = useRouter();
  const data = useMemo(() => {
    return getListResources.data?.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [getListResources.data, searchQuery]);

  const onLogout = () => {
    alert({
      message: "¿Esta seguro(a) que desea cerrar sesion?",
      type: "warning",
    }).then((res) => {
      if (res.type === "confirm") {
        SecureStorage.deleteItemAsync("token").then(() => {
          logout();
          navigation.replace("/");
        });
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <>
      <Drawer.Section style={{ marginBottom: 150 }}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
            iconColor="white"
            theme={{ colors: { onSurfaceVariant: "white" } }}
          />
        </View>
        <FlatList
          data={data}
          style={styles.flatList}
          renderItem={({ item }) => (
            <Drawer.Item
              label={item.title}
              style={{
                borderRadius: 15,
              }}
              theme={{
                colors: {
                  secondaryContainer: theme.colors.primary,
                  onSecondaryContainer: "white",
                  onSurfaceVariant: "white",
                },
              }}
              rippleColor={theme.colors.primary}
              active={pathname === `/resource/${item.id}`}
              onPress={() => navigation.push(`/resource/${item.id}`)}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Drawer.Item
          label={"Cerrar Sesion"}
          style={{
            borderRadius: 15,
          }}
          icon={"logout"}
          theme={{
            colors: {
              secondaryContainer: theme.colors.primary,
              onSecondaryContainer: "white",
              onSurfaceVariant: "white",
            },
          }}
          rippleColor={theme.colors.primary}
          onPress={onLogout}
        />
      </Drawer.Section>
    </>
  );
};

export default DrawerListRender;

const styles = StyleSheet.create({
  searchBar: {
    width: "90%",
    justifyContent: "center",
    backgroundColor: theme.colors.inputs,
    marginLeft: "5%",
    color: "white",
    borderRadius: 15,
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: "center",
    marginVertical: 20,
    alignContent: "center",
    width: "100%",
  },
  flatList: {
    // marginBottom: 160
  },
  optionsSection: {
    // backgroundColor: "red",
    height: 110,
    position: "absolute",
    bottom: 50,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
