import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import "./ProductDetails.css";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const{addToCart} = useContext(CartContext)
  const { id } = useParams();

  async function getData() {
    try {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!res.ok) {
        throw new Error("Failed API call");
      }

      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log("Something went wrong:", error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  // ✅ Loading State
  if (product === null) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className="product-details">
      {/* ✅ Left Side Image */}
      <div className="product-details-image">
        <img src={product.image} alt={product.title} />
      </div>

      {/* ✅ Right Side Info */}
      <div className="product-details-info">
        <h2>{product.title}</h2>

        <p className="product-details-price">₹ {product.price}</p>

        <p className="product-details-desc">{product.description}</p>

        <button className="product-details-btn" onClick={()=>addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
