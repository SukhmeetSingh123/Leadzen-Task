const MainPage_Reducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true,
            }
        case "SET_API_DATA":
                return {
                    ...state,
                    isLoading:false,
                    detail:action.payload,
                }
       case "API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
    }
}
export default MainPage_Reducer;    
