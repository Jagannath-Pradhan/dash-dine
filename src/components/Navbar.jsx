import NavbarClient from "./NavbarClient";

export default function Navbar({ user, isScrolled }) {
  return (
    <NavbarClient
      isLoggedIn={!!user}
      userName={user?.name || ""}
      userRole={user?.role || ""}
      isScrolled={isScrolled}
    />
  );
}
