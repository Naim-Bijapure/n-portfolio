/** @format */

import { createContext, Dispatch, SetStateAction, useState } from "react";

//create a context, with createContext api
export const ThemeContext = createContext<{ theme: string; setTheme: Dispatch<SetStateAction<string>> }>({
  theme: "",
  setTheme: () => "",
});

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    // this is the provider providing state
    <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
