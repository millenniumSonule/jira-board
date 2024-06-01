import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/apiCallDummy';
import './Homepage.css'; // Import the CSS file for styling

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.apiCallDummy.data);
  const status = useSelector((state) => state.apiCallDummy.status);
  const error = useSelector((state) => state.apiCallDummy.error);

  // Pagination state 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products to display per page

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status ===  'failed') {
    return <div>Error: {error}</div>;
  }

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle pagination buttons
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="products-grid">
        {currentProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-index">$ {product.price}</div>
            <div className="product-title">{product.title}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Homepage;
