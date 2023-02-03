import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/MainPage_Reducer"
const AppContext=createContext();

const API="https://jsonplaceholder.typicode.com/users";
const initialState={
    detail:[], 
    isLoading:false,
    isError:false,
}
const AppProvider =({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState);
    const getDetail=async (url)=>{
        dispatch({type:"SET_LOADING"});
        try{
            const res =await axios.get(url);
            const detail=await res.data;
            dispatch({type:"SET_API_DATA", payload:detail})
        }catch(error){
            dispatch({type:"API_ERROR"})
        }
    };
    useEffect(()=>{
        getDetail(API);
    },[])
    return (
        
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
}
const useDetailContext=()=>{
    return useContext(AppContext);
};
export {AppProvider,AppContext,useDetailContext}