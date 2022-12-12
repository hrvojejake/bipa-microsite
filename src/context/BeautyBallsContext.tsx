import { createContext, ReactNode, useContext, useState } from "react";
import Menu from "../components/Menu";

type BeautyBallsProviderProps = {
  children: ReactNode;
};

type BeautyBallsContext = {
  openMenu: () => void;
  closeMenu: () => void;
};

const BeautyBallsContext = createContext({} as BeautyBallsContext);

export const BeautyBallsProvider = ({ children }: BeautyBallsProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <BeautyBallsContext.Provider
      value={{
        openMenu,
        closeMenu
      }}
    >
      {children}
      <Menu isOpen={isOpen} />
    </BeautyBallsContext.Provider>
  );
};
