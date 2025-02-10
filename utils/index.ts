import { routes } from "~/app/routes";
import { removeCookie } from "./cookie";

export const logout = () => {
    const profileStore = useProfileStore();
    removeCookie('access_token');
    profileStore.isVerify = false;
    window.location.href = routes.ROOT.path;
}
  