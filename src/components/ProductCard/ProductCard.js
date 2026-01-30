import Card from "../Card/Card";
import "./productCard.css";

function ProductCard({
  name,
  image,
  price,
  description,
  onsale = false,
  saleprice,
}) {
  return (
    <Card className="product-card">
      <img
        src={image}
        alt={name}
        title={`Click to see the ${name} details`}
        height={200}
        width={150}
      />
      <h3>
        <u>{name}</u>
        {onsale && <span className="sale-badge"> ON SALE!</span>}
      </h3>
      <p>{description}</p>
      <span className="price">
        {onsale ? (
          <>
            <span className="orginal_price">${price}</span>
            <span className="sale_price">${saleprice}</span>
          </>
        ) : (
          `$${price}`
        )}
      </span>
      <button onClick={() => alert(`Add ${name} to cart!`)}>Add to Cart</button>
    </Card>
  );
}

export default ProductCard;