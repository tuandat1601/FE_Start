import { PageContextServer } from "vike/types";
import { UserDetail } from "../types";

export type Data = Awaited<ReturnType<typeof data>>;
export const data = async (pageContext: PageContextServer) => {
  const { id } = pageContext.routeParams;
  const apiBase = import.meta.env.VITE_VIKE_MOCK_API;
 try {
    const res = await fetch(`${apiBase}/${id}`);
    if (!res.ok) {
      console.error("Failed to fetch user", res.status);
      return [];
    }
    const userData = (await res.json()) as UserDetail;
    return minimize(userData);
  } catch (err) {
    console.error("Lỗi kết nối:", err);
    return [];
  }
};
function minimize(user: UserDetail): UserDetail {
  const { id, name, email } = user;
  const minimizeuser = { id, name, email };
  return minimizeuser;
}
