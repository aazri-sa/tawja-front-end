import React, { createContext, useReducer, useEffect } from "react"
import { loginHandler, fetchCurrentUser } from "../handler/index"
import { useNavigate } from "react-router-dom"

// Create the initial state
const initialState = {
    token: localStorage.getItem("access_token"),
    refreshToken: localStorage.getItem("refresh_token"),
    user: null
}

// Create the reducer function
const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload?.user ?? null
            }

        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload?.token ?? null,
                refreshToken: action.payload?.refreshToken ?? null
            }
        case "LOGOUT":
            return {
                ...state,
                token: null,
                refreshToken: null,
                user: null
            }
        default:
            return state
    }
}

// Create the AuthContext
export const AuthContext = createContext({
    state: initialState,
    dispatch: () => null,
    handleLogin: async () => {},
    handleLogout: () => {}
})

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    //const navigate = useNavigate()

    const handleLogin = async (username, password) => {
        try {
            // Call your login API here, passing email and password
            const response = await loginHandler(username, password)
            const { access, refresh } = response.data

            localStorage.setItem("access_token", access)
            localStorage.setItem("refresh_token", refresh)
            dispatch({
                type: "SET_TOKEN",
                payload: { user: null, refreshToken: refresh, token: access }
            })
            return "login success"
        } catch (error) {
            // Handle login error
            throw new Error("login failed")
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        dispatch({ type: "LOGOUT" })
    }

    return (
        <AuthContext.Provider
            value={{ state, dispatch, handleLogin, handleLogout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider