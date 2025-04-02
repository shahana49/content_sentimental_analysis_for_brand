import { useQuery } from "@tanstack/react-query";
import apiClient from "./client";

export const useGetDashboard = () =>
  useQuery({
    queryKey: ["dashboard"],
    queryFn: () => apiClient.post("get-dashboard").then((res) => res.data),
    select: (data) => data?.data,
  });

export const useGetAnalyticData = (data) => {
  console.log(data);
  return useQuery({
    queryKey: ["anlyticData"],
    queryFn: () =>
      apiClient
        .post("start", {
          campaignName: data?.campaignName,
          selectedProducts: data?.products,
          selectedPlatforms: data?.platforms,
        })
        .then((res) => res.data),
    select: (data) => data,
  });
};
