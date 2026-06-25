import "./ProductCard.css"

function ProductCard({ product }) {
    
  return (
    <div>
      <h3>{product.name}</h3>

      <p>{product.category}</p>

      <p>${product.price}</p>

      <button>View Details</button>
    </div>
  );
}

export default ProductCard;