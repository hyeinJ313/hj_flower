"use client";

import NavBarPC from "./NavBarPC";
import NavBarMobile from "./NavBarMobile";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <NavBarMobile /> : <NavBarPC />;
}