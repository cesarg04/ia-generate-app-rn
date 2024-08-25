import { apiAdapter } from "@/shared/api/base.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IGetListResponse } from "./responses/get-list-resources.response";
import { ICreateResourceResponse } from "./responses/create-resource.response";
import { RESOURCES_KEYS } from "./keys/resources.keys";
import { ResourcesEndpoints } from "../../endpoints/resources.endpoints";

interface resourcesOptions {
  id?: string;
}

export const resourcesServices = (options?: resourcesOptions) => {
  const getListResources = useQuery({
    queryKey: [RESOURCES_KEYS.LIST_RESOURCES],
    queryFn: () => apiAdapter.get<IGetListResponse[]>(ResourcesEndpoints.getResources),
  });

  const getResourcesById = useQuery({
    queryKey: [RESOURCES_KEYS.RESOURCES_ID, options?.id],
    queryFn: () =>
      apiAdapter.get<IGetListResponse>(ResourcesEndpoints.getResourcesById(options?.id!)),
    enabled: options?.id !== undefined && options.id?.length > 0,
  });

  const createResource = useMutation({
    mutationFn: (q: string) => {
      return apiAdapter.post<ICreateResourceResponse>(ResourcesEndpoints.createResource, {
        title: q,
      });
    },
    mutationKey: [RESOURCES_KEYS.CREATE_RESOURCES],
  });

  return {
    getListResources,
    getResourcesById,
    createResource,
  };
};
