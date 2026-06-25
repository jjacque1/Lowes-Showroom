import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/product";
import "./ProductGrid.css"

function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="product-grid">
      <h2>Featured Showroom Products</h2>

      <input
        type="text"
        placeholder="Search showroom products"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;