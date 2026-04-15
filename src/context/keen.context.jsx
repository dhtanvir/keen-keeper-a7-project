"use client ";
import React, { createContext, useState } from "react";

export const KeenAppsContext = createContext();

const KeenAppsProvider = ({ children }) => {

  const [timeline, setTimeline] = useState([]);

  const data = {
    name: " jajon ",
    timeline,
    setTimeline,
  };

  return (
    <KeenAppsContext.Provider value={data}>
        {children}
    </KeenAppsContext.Provider>
  );
};

export default KeenAppsProvider;
