type IIntegration = {
    account_name: string,
} | null

export interface IIntegrations {
    youtube: IIntegration,
    twitter: IIntegration,
    instagram: IIntegration
}