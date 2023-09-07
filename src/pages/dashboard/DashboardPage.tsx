import { AddTwitter, AddYoutube } from "@features/integrations";
import { integrationsModel } from "@entities/integrations";
import { LoadableComponent } from "@shared/ui/loadble";
import { AuthRequired } from "@entities/session";

export const DashboardPage = () => {
    const { query, integrations } = integrationsModel.selectors.useIntegrations()

    return (
        <div>
            <AuthRequired>
                <AddYoutube/>
                <AddTwitter/>
                <LoadableComponent onError='Error!' query={query}>
                    <div>

                    </div>
                </LoadableComponent>
            </AuthRequired>
        </div>
    );
}