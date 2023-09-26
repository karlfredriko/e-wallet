import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <NavLink to="/">E_Wallet</NavLink>
      </h1>
      <nav>
        <NavLink to="/cards">My Wallet</NavLink>
        <NavLink to="/addcard">Add card</NavLink>
      </nav>
    </header>
  );
};
