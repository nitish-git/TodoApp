import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { AppContext, AppDispatchContext } from '../contexts/AppContext'
import { appInitialState, appReducer } from '../reducers/appReducer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppContextProvider({ children }) {
    const [app, dispatch] = useReducer(appReducer, appInitialState)
    useEffect(() => {
        if (localStorage.getItem("TODO_APP_BY_NITISH") === null) {
            localStorage.setItem("TODO_APP_BY_NITISH", JSON.stringify(app))
        } else {
            console.log("refreshed")
            dispatch({ type: "SYNC_LOCAL_STATE", payload: "TODO_APP_BY_NITISH" })
        }
    }, [])

    useEffect(() => {

    }, [])
    return (
        <AppContext.Provider value={app}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
                <ToastContainer className="toast-container-margin-top" newestOnTop={true} />
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}

export default AppContextProvider