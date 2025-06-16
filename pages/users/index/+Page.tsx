import { useData } from "vike-react/useData";
import { Data } from "./+data";

export default function Page() {
  const users = useData<Data>();
  return (
    <>
      <h1>List User</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <a href={`users/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ol>
    </>
  );
}
