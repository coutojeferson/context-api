import React from 'react';
import InfoProduct from './InfoProduct';
import { GlobalStorage } from './globalContext';
import ClearProductsButton from './ClearProductsButton';

const App = () => {
  return (
    <GlobalStorage>
      <InfoProduct />
      <ClearProductsButton />
    </GlobalStorage>
  );
};

export default App;
