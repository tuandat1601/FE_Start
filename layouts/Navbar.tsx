import { Link } from "../components/Link";

export default function Navbar() {
  function Navbar({ children }: { children: React.ReactNode }) {
    return (
      <div id="navbar" className={"flex flex-row gap-6 items-center px-6 py-3"}>
        {children}
      </div>
    );
  }
  return (
    <Navbar>
      <Link href="/">Welcome</Link>
      <Link href="/todo">Todo</Link>
      <Link href="/star-wars">Data Fetching</Link>
      <Link href="/users">Users Fetching</Link>
    </Navbar>
  );
}
