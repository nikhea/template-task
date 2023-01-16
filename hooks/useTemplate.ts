import { useQuery } from "@tanstack/react-query";
import * as api from "../api/template";

export const useTemplate = () => {
  return useQuery(["template"], () => api.getTemplate());
};
