import { createContext, ReactNode, useState } from 'react';

interface GlobalContextData{
  isSidebarOpen: boolean;
  toggleSidebarState: () => void;
}

interface GlobalContextProviderProps{
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({ children }: GlobalContextProviderProps){
  const [isSidebarOpen, setIsModalOpen] = useState(false);

  function toggleSidebarState(){
    setIsModalOpen((prev) => !prev);
  }

  return(
    <GlobalContext.Provider value={{
      isSidebarOpen,
      toggleSidebarState,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}