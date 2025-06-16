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
      <div className="navbar bg-base-100 shadow-sm">
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

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id="sidebar" className={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"}>
      {children}
    </div>
  );
}




function LogoUrl() {
  return (
    <div className={"p-5 mb-2"}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
