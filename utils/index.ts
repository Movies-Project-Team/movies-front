import { routes } from "~/app/routes";
import { removeCookie } from "./cookie";

export const logout = () => {
    removeCookie('access_token');
    window.location.href = routes.ROOT.path;
}
  