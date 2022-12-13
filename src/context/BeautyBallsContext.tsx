import { createContext, ReactNode, useContext, useState } from "react";
import Menu from "../components/Menu";

type BeautyBallsProviderProps = {
  children: ReactNode;
};

type BeautyBallsContext = {
  openMenu: () => void;
  closeMenu: () => void;
  jumpToSlide: number;
  setJumpToSlide: React.Dispatch<React.SetStateAction<number>>;
};

export const BeautyBallsContext = createContext({} as BeautyBallsContext);

export function useBeautyBalls() {
  return useContext(BeautyBallsContext);
}

export const BeautyBallsProvider = ({ children }: BeautyBallsProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [jumpToSlide, setJumpToSlide] = useState(2);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <BeautyBallsContext.Provider
      value={{
        openMenu,
        closeMenu,
        jumpToSlide,
        setJumpToSlide
      }}
    >
      <Menu isOpen={isOpen} />
      {children}
    </BeautyBallsContext.Provider>
  );
};
