import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children})=>{
  const[darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode") || false))   

  const toggle = () =>{
    setDarkMode(!darkMode)
  }

  useEffect(()=>{
    localStorage.setItem("darkMode",false) 
  },[])

  return(
    <DarkModeContext.Provider value={{darkMode,toggle}}>{children}</DarkModeContext.Provider>
  )
}
