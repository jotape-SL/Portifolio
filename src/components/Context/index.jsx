import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isAutenticado, setIsAutenticado] = useState(false);
  const [isPtbr, setIsPtbr] = useState(true);
  const [confidencial, setConfidencial] = useState(false);
  const toggleLang = (is) => {
    setIsPtbr(is);
    console.log(isPtbr ? "Português brasileiro" : "English");
  };
  return (
    <AppContext.Provider
      value={{
        isPtbr,
        toggleLang,
        confidencial,
        setConfidencial,
        isAutenticado,
        setIsAutenticado,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
