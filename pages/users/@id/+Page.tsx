import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";

export default function Page() {
  const user = useData<Data>();
  return (
    <>
      <h1>{user.name}</h1>
      <br />
      Email: {user.email}
      <br />
    </>
  );
}
