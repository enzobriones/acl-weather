import { losAngelesAction } from "@/core/actions/los-angeles.action"
import { useQuery } from "@tanstack/react-query"

export const useEcowitt = () => {
  const lastHourDataQuery = useQuery({
    queryKey: ["lastHourData", "losAngeles"],
    queryFn: losAngelesAction,
    staleTime: 1000 * 60 * 60,
  });


  return {
    lastHourDataQuery,
  }
}