import { ReactElement } from "react";
import { HomePage } from "@pages/home";
import { DashboardPage } from "@pages/dashboard";
import { AccountPage } from "@pages/account";
import { NotFoundPage } from "@pages/not-found";

interface IRoute {
    path: string,
    page: ReactElement,
    protected?: boolean
}

export const routes: IRoute[] = [
    {
        path: '*',
        page: <NotFoundPage/>
    },

    {
        path: '/',
        page: <HomePage/>
    },

    {
        path: '/dashboard',
        page: <DashboardPage/>,
        protected: true
    },

    {
        path: '/account',
        page: <AccountPage/>,
        protected: true
    }
]