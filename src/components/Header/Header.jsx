import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <section>
        <Link to="/" className="link">logo</Link>

        <button>Find a store near me</button>

        <div>
          <input type="text" placeholder="What can we help you find?" />
          <span>🔍</span>
        </div>

        <nav>
          <Link to="/mylowes" className="link">MyLowes</Link>
          <Link to="/signin" className="link">Sign in</Link>
          <Link to="/cart" className="link">Cart</Link>
        </nav>
      </section>

      <nav>
        <button>Shop All</button>
        <button>Installations</button>
        <button>Deals</button>
        <button>Design & Ideas</button>
        <button>Appliances</button>
        <button>Bathroom</button>
        <button>Building Supplies</button>
        <button>Doors & Windows</button>
        <button>Lawn & Garden</button>
        <button>Outdoor</button>
      </nav>
    </header>
  );
}

export default Header;
