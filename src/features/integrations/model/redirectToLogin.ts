import { BACKEND_URL } from "@shared/api";

export const redirectToLogin = (integration: 'youtube' | 'twitter' | 'instagram', token: string) => {
    window.location.href = `${BACKEND_URL}/integrations/${integration}/login?access_token=${token}`
}