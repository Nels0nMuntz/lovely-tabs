import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { SelectedTabContext, SelectedTabContextProviderProps } from "./types";

const SelectedTabContext = createContext<SelectedTabContext>({});

export const SelectedTabContextProvider: React.FC<SelectedTabContextProviderProps> = ({
  children,
}) => {
  const location = useLocation();
  const tabId = location.pathname.replace(/\//g, "");
  const [selectedTabId, setSelectedTabId] = useState<string | null>(tabId);
  return (
    <SelectedTabContext.Provider value={{ selectedTabId, setSelectedTabId }}>
      {children}
    </SelectedTabContext.Provider>
  );
};

export const useSelectedTabContext = () => {
  return useContext(SelectedTabContext);
};
