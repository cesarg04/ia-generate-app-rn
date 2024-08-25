import { resourcesServices } from "@/shared/models/services/resources/resources.service";
import theme from "@/shared/theme/theme";
import { usePathname, useRouter } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Drawer, Searchbar } from "react-native-paper";

const DrawerListRender = () => {
  const { getListResources } = resourcesServices();
  const [searchQuery, setSearchQuery] = React.useState("");

  const pathname = usePathname();
  const navigation = useRouter();
  const data = useMemo(() => {
    return getListResources.data?.data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [getListResources.data?.data, searchQuery]);

  useEffect(() => {}, []);

  return (
    <Drawer.Section>
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
    </Drawer.Section>
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
    borderRadius: 15
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: "center",
    marginVertical: 20,
    alignContent: "center",
    width: "100%",
  },
});
