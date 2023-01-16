import { useQuery } from "@tanstack/react-query";
import * as api from "../api/template";

interface useTemplateProps {
  currentPage: number;
}
export const useTemplate = (currentPage: number) => {
  return useQuery(
    ["template", currentPage],
    () => api.getTemplate(currentPage),
    {
      keepPreviousData: true,
    }
  );
};
