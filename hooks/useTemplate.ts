import { useQuery } from "@tanstack/react-query";
import * as api from "../api/template";

interface useTemplateProps {
  currentPage: number;
}
export const useTemplate = (currentPage: number, filters: any) => {
  return useQuery(
    ["template", currentPage, filters],
    () => api.getTemplate(currentPage, filters),
    {
      keepPreviousData: true,
    }
  );
};
