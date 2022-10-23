import Nav from "./Nav.js";
export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
