import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <h1>E-Wallet</h1>
      </NavLink>
      <nav>
        <NavLink to="cards">
          <div className="col">
            <i className="fa-solid fa-wallet" />
            <small>wallet</small>
          </div>
        </NavLink>
        <NavLink to="addcard">
          <div className="col">
            <i className="fa-regular fa-credit-card" />
            <small>add</small>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};
