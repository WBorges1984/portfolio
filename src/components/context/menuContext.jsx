import React, { createContext, useState, useContext } from "react";

// Criação do contexto
const MenuContext = createContext();

// Provedor do contexto
export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState("home");

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useMenu = () => {
  return useContext(MenuContext);
};
