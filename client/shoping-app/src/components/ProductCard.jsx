import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard ({product}) {
  
   
    return (
        <Link className="product-card" to={`/products/${product.id}`}>
           <img src={product.image} alt={product.title} className="product-image"/>
           <p className="product-title">Title:{product.title}</p>
           <p className="product-price">Price:{product.price}</p>
           <button className="product-btn">click</button>
        </Link>
    )
}

export default ProductCard