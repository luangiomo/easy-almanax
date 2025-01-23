import { createContext, ReactNode, useState } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import { UserSettings } from "../types/UserSettings";
import { getParisTime } from "../utils/getParisTime";

type OfferingContextType = {
  currentMonth: string;
  setCurrentMonth: (newState: string) => void;
  userSettings: UserSettings;
  setUserSettings: (newState: UserSettings) => void;
};

const DEFAULT_VALUE: OfferingContextType = {
  currentMonth: getParisTime().month,
  setCurrentMonth: () => {},
  userSettings: {
    accounts: 1,
    level: 9,
  },
  setUserSettings: () => {},
};

interface OfferingContextProviderProps {
  children: ReactNode;
}

export const OfferingContext =
  createContext<OfferingContextType>(DEFAULT_VALUE);

export const OfferingContextProvider = ({
  children,
}: OfferingContextProviderProps) => {
  const [currentMonth, setCurrentMonth] = useState(DEFAULT_VALUE.currentMonth);
  const [userSettings, setUserSettings] = usePersistedState(
    "easy-almanax-user-settings",
    DEFAULT_VALUE.userSettings
  );
  return (
    <OfferingContext.Provider
      value={{
        currentMonth,
        setCurrentMonth,
        userSettings,
        setUserSettings,
      }}
    >
      {children}
    </OfferingContext.Provider>
  );
};
