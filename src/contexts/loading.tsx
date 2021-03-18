import React, { createContext, useState, useContext } from "react";

import LoadingModal from '../components/LoadingModal';

interface LoadingContextInterface {
  show: Function;
  hide: Function;
}

const LoadingContext = createContext<LoadingContextInterface>(
  {} as LoadingContextInterface
);

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  function show(): void {    
    setLoading(true);
  }

  function hide(): void {
    setLoading(false);
  }

  return (
    <LoadingContext.Provider value={{ show, hide }}>
      <LoadingModal show={loading} />
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}

export default LoadingProvider;