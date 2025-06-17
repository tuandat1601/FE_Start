import { User, UserDetail } from "../types";

export type Data = Awaited<ReturnType<typeof data>>;
export const data = async () => {
  try {
     const response = await fetch(import.meta.env.VITE_VIKE_MOCK_API);

    if (!response.ok) {
      console.error("Lỗi từ server:", response.status);
      return [];
    }

    const userData = (await response.json()) as UserDetail[];
    const users = minimize(userData);
    return users;
  } catch (error) {
    console.error("Fetch lỗi:", error);
    return [];
  }

};
function minimize(users: UserDetail[]): User[] {
  return users.map((user) => {
    const { id, name, email } = user;
    return { id, name, email };
  });
}
