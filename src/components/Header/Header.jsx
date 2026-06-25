import "./Header.css";

function Header() {
  return (
    <header>
      <section>
        <div>Logo</div>

        <button>Find a store near me</button>

        <div>
          <input type="text" placeholder="What can we help you find?" />
          <span>🔍</span>
        </div>

        <nav>
          <button>MyLowes</button>
          <button>Sign in</button>
          <button>Cart</button>
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