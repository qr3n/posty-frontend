import { selector, useRecoilValueLoadable } from "recoil";
import { getIntegrations } from "@shared/api/integrations";

const integrationsQuery = selector({
    key: 'IntegrationsQuery',
    get: async () => {
        const integrations = await getIntegrations()

        return integrations?.data
    },
})

export const useIntegrations = () => {
    const query = useRecoilValueLoadable(integrationsQuery)
    const integrations = query.getValue()

    return { query, integrations }
}