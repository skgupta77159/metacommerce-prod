import { createContext, useEffect, useReducer, useState } from "react"
import axios from "../axios";

const INITIAL_STATE = {
    page: "home"
}

export const PageContext = createContext(INITIAL_STATE);

export const PageContextProvider = ({ children }) => {

    const [page, setPage] = useState("home")

    return (
        <PageContext.Provider
            value={{
                page: page,
                setPage,
            }}>
            {children}
        </PageContext.Provider>
    )
}