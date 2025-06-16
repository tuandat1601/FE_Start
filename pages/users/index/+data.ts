import { User, UserDetail } from "../types";

export type Data = Awaited<ReturnType<typeof data>>;
export const data = async () => {
  const response = await fetch(import.meta.env.VITE_VIKE_MOCK_API);

  const userData = (await response.json()) as UserDetail[];
  const users = minimize(userData);
  return users;
};
function minimize(users: UserDetail[]): User[] {
  return users.map((user) => {
    const { id, name, email } = user;
    return { id, name, email };
  });
}
