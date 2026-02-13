import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [products, setProducts] = React.useState(null);

  const fetchProduct = async () => {
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto',
    );
    const data = await response.json();
    setProducts(data);
  };

  const clearProducts = () => {
    setProducts(null);
  };

  React.useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <GlobalContext.Provider value={{ products, clearProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};
