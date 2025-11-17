// "use client";

// import { useEffect, useState } from "react";

// export default function ScrollNavbarWrapper({ children }) {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 100);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return children({ isScrolled });
// }




"use client";

import { useEffect, useState, cloneElement } from "react";

export default function ScrollNavbarWrapper({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // children is a React element → we clone it and inject props
  return cloneElement(children, { isScrolled });
}
