import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./Loading"
import Toast from "./Toast"

const Notify  = () =>
{
    const {state, dispatch} = useContext(DataContext)
    const {notify} = state
    return (
        <>
            {notify.loading && <Loading/>}
            {notify.error && <Toast 
                msg={ {msg:notify.error}}
                icon={wrongIcon()}
                color={"bg-red-100 text-red-500"}
                hide = {() => dispatch({type:'NOTIFY',payload:{}})}
                />}
            {notify.success && <Toast 
                msg={ {msg:notify.success}}
                icon={successIcon()}
                color={"bg-green-100 text-green-500"}
                hide = {() => dispatch({type:'NOTIFY',payload:{}})}
                />}
        </>
    )
}

export default Notify

const wrongIcon = () =>{
    return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}
const successIcon = () =>{
    return (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    )
}