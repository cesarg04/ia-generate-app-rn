import { resourcesServices } from "@/shared/models/services/resources/resources.service";
import { useRoute } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const ResourcesById = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { getResourcesById } = resourcesServices({ id: id });

  const data = useMemo(
    () => getResourcesById.data?.data,
    [getResourcesById.data?.data]
  );

  if (getResourcesById.isLoading) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <View>
      <Text>{data?.title}</Text>
    </View>
  );
};

export default ResourcesById;
