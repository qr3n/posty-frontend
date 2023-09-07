import { api } from "@shared/api";

export const deleteIntegration = (integration: string) => api.post(`/integrations/${integration}/remove`)