import React, { createContext, useContext, useReducer } from "react";

// createContext - it prepare the datalayer for what is to come
export const DataLayerContext = createContext();

//This is the actual datalayer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// State Provider - It provides a way to dispatch an action
//to the datalayer, get an action from the datalayer
export const useDataLayerValue = () => useContext(DataLayerContext);
