import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

//initial
const INITIAL_STATE = { 
    // user:{
    //     _id: "6216f1b8224393fe5b9e4558",
    //     username:"Lily",
    //     email:"lily@gmail.com",
    //     profilePicture:"https://www.cheatsheet.com/wp-content/uploads/2019/01/Aubrey-Anderson-...",
    //     coverPicture:"",
    //     followers:[],
    //     following:[],
    //     isAdmin:false,
    // },
    user: null,
    isFetching: false,
    error: false 
};

export const AuthContext = createContext(INITIAL_STATE);


//wrapper
export const AuthContextProvider = ({children}) => {

    const[state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider value = {{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch,
            }}>

            {children}

        </AuthContext.Provider>
    )
}
