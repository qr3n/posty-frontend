import { IfAuthorized } from "@entities/session";
import { Login, Logout } from "@features/auth";

export const Navbar = () => {
    return (
        <IfAuthorized else={<Login/>}>
            <Logout/>
        </IfAuthorized>
    )
}