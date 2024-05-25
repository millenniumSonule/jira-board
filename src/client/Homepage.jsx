// client/Homepage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/apiCallDummy';

const Homepage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.apiCallDummy.data); // Accessing data property
  const status = useSelector((state) => state.apiCallDummy.status);
  const error = useSelector((state) => state.apiCallDummy.error);


  useEffect(() => {
    
    dispatch(fetchProducts());
    
  },[dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <h1>Products</h1>

        {products.map((item,index)=>(
            <div key={index}>
              {index}
              </div>
        ))}

    </div>
);

};

export default Homepage;
