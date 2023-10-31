import { createContext, useMemo, useState } from "react";

interface ContextType {
  isFinished: boolean;
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

export const FinishGameContext = createContext<ContextType>({
  isFinished: false,
  setIsFinished: () => {},
});

export const FinishGameProvider: React.FC<Props> = ({ children }) => {
  const [isFinished, setIsFinished] = useState(false);
  const value = useMemo(() => {
    return {
      isFinished,
      setIsFinished,
    };
  }, [isFinished]);
  return (
    <FinishGameContext.Provider value={value}>
      {children}
    </FinishGameContext.Provider>
  );
};
