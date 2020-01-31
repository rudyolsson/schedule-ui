import React from 'react'

export interface ContextProps {
  name: string;
  cutest: boolean;
  nickNames: string[];
};

export const AppContext = React.createContext<Partial<ContextProps>>({});

export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer
export default AppContext;