import  { createContext, useReducer } from 'react'

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
}

export const Context = createContext(INIIAL_STATE)