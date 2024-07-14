"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { ComponentProps, Fragment, useState } from "react";

interface ITheme extends ComponentProps<"div"> {}
const ThemeProvider = ({ children }: ITheme) => {
  const [theme, setTheme] = useState("default");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
