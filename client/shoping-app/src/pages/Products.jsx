import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { SearchContext } from "../context/searchContext";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("all");

  const[order,setOrder] = useState("none");
  


  const { searchQuery } = useContext(SearchContext);

  // ✅ Combined Filter (Search + Category)
  const filteredProducts = products.filter((product) => {
    // Category match
    const matchesCategory =
      category === "all" || product.category === category;

    // Search match
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });
   
  const sortedProducts = [...filteredProducts];

  if(order === "low"){
     sortedProducts.sort((a,b)=>a.price-b.price);
  }
  else if(order=== "high"){
    sortedProducts.sort((a,b)=>b.price-a.price);
  }

  async function getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Data fetching failed");
      }

      const data = await res.json();
      setProducts(data);

      console.log("Fetched Products:", data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Explore Our Collection 🛍️</h1>
        <p>Discover amazing products at unbeatable prices</p>
      </div>

      {/* ✅ Filter Section */}
      <div className="filters-section">
        <div className="filter-group">
          <label>Category:</label>
          <select onChange={(e) => setCategory(e.target.value)} className="filter-select">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort By Price:</label>
          <select onChange={(e)=>setOrder(e.target.value)} className="filter-select">
            <option value="none">Default</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>


      {/* ✅ Render Only Filtered Products */}
      <div className="products-container">
        {
          sortedProducts.map((ele)=>(
            <ProductCard key={ele.id} product={ele}/>
          ))
        }
      </div>
    </div>
  );
}

export default Products;
