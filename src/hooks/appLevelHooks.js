import { AppContext, AppDispatchContext } from "../contexts/AppContext";
import { useContext } from "react";

export function useApp() {
    return useContext(AppContext)
}

export function useAppDispatch() {
    return useContext(AppDispatchContext)
}