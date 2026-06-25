import "./StoreSearch.css";

function StoreSearch() {
  return (
    <section className="store-search-section">
      <h2>Find A Store</h2>
      <div>
        <input type="text" placeholder="ZIP Code, City, State or Store #" />
        <span>🔍</span>
      </div>
    </section>
  );
}

export default StoreSearch;
