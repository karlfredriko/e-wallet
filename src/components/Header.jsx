import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>E_Wallet</h1>
      <nav>
        <NavLink to="/">Start</NavLink>
        <NavLink to="/cards">View cards</NavLink>
        <NavLink to="/addcard">Register card</NavLink>
      </nav>
    </header>
  );
};
