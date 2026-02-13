import React from 'react';
import { GlobalContext } from './globalContext';

const ClearProductsButton = () => {
  const { clearProducts } = React.useContext(GlobalContext);
  return <button onClick={() => clearProducts()}>Limpar</button>;
};
export default ClearProductsButton;
