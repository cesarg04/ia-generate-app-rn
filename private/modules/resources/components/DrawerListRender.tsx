import { resourcesServices } from "@/shared/models/services/resources/resources.service";
import { useRoute } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";

import React, { useEffect, useMemo } from "react";
import { FlatList } from "react-native";
import { Drawer } from "react-native-paper";

const DrawerListRender = () => {
  const { getListResources } = resourcesServices();
  const navigation = useRouter();
  const data = useMemo(
    () => getListResources.data?.data,
    [getListResources.data?.data]
  );

  useEffect(() => {}, []);

  return (
    <Drawer.Section title="This is">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Drawer.Item
            label={item.title}
            style={{}}
            active={false}
            onPress={() => navigation.push(`/resource/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Drawer.Section>
  );
};

export default DrawerListRender;
