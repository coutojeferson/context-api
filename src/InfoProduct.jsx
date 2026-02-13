import React from 'react';
import { GlobalContext } from './globalContext';

const InfoProduct = () => {
  const { products } = React.useContext(GlobalContext);

  return (
    <div>
      {products &&
        products.map((product) => <li key={product.id}>{product.nome}</li>)}
    </div>
  );
};

export default InfoProduct;
