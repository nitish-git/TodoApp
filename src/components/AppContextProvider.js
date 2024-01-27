import React from 'react'
import { useReducer } from 'react'
import { AppContext, AppDispatchContext } from '../contexts/AppContext'
import { appInitialState, appReducer } from '../reducers/appReducer'

function AppContextProvider({ children }) {
    const [app, dispatch] = useReducer(appReducer, appInitialState)
    return (
        <AppContext.Provider value={app}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}

export default AppContextProvider