// client/Homepage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/apiCallDummy';

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getDummyResponse.data);
  const status = useSelector((state) => state.getDummyResponse.status);
  const error = useSelector((state) => state.getDummyResponse.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
