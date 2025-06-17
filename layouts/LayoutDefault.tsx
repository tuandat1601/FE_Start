import "./style.css";

import "./tailwind.css";

import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Profile from "./Profile";
import Logo from "./Logo";
import Content from "./Content";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex flex-col max-w-5xl m-auto"}>
      <div className="navbar bg-base-100 shadow-sm flex flex-row gap-6 items-center px-6 py-3 bg-white text-black">
        <Logo></Logo>
        <Navbar></Navbar>
        <div className="flex-none">
          <Cart></Cart>
          <Profile></Profile>
        </div>
      </div>
      <Content>{children}</Content>
    </div>
  );
}
