import { api } from "@shared/api";
import { IIntegrations } from "./types.ts";

export const getIntegrations = () => {
    return api.get<IIntegrations>('/integrations/actions/get')
}
