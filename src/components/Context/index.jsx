import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [confidencialModal, setConfidencialModal] = useState(false);
  const [isAutenticado, setIsAutenticado] = useState(false);
  const [pessResumo, setPessResumo] = useState(false);
  const [profResumo, setProfResumo] = useState(true);
  const [ConfidencialTxt, setConfidencialTxt] = useState(false);
  const [isPtbr, setIsPtbr] = useState(true);
  const toggleLang = (is) => {
    setIsPtbr(is);
    console.log(isPtbr ? "Português brasileiro" : "English");
  };
  return (
    <AppContext.Provider
      value={{
        isPtbr,
        toggleLang,
        confidencialModal,
        setConfidencialModal,
        isAutenticado,
        setIsAutenticado,
        pessResumo,
        setPessResumo,
        profResumo,
        setProfResumo,
        ConfidencialTxt,
        setConfidencialTxt,
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
