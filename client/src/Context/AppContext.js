import { createContext, useContext } from "react"

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const value = {}

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

// Proper custom hook
export const useAppContext = () => {
    return useContext(AppContext)
}
