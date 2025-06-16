import { PageContextServer } from "vike/types";
import { UserDetail } from "../types";

export type Data = Awaited<ReturnType<typeof data>>;
export const data = async (pageContext: PageContextServer) => {
  const { id } = pageContext.routeParams;
  const apiBase = import.meta.env.VITE_VIKE_MOCK_API;
  const res = await fetch(`${apiBase}/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch user ${id}`);
  }
  const userData = (await res.json()) as UserDetail;
  const users = minimize(userData);
  return users;
};
function minimize(user: UserDetail): UserDetail {
  const { id, name, email } = user;
  const minimizeuser = { id, name, email };
  return minimizeuser;
}
