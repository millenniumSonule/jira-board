import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/apiCallDummy';
import './Homepage.css'; // Import the CSS file for styling

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.apiCallDummy.data);
  const status = useSelector((state) => state.apiCallDummy.status);
  const error = useSelector((state) => state.apiCallDummy.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status ==  'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-index">$ {product.price}</div>
            <div className="product-title">{product.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
