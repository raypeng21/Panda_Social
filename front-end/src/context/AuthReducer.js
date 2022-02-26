const AUthReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFetching: true,
                error:false,
            };


        case "LOGIN_SUCCESS":
            return{
                user:action.package,
                isFetching: false,
                error:false,
            };


        case "LOGIN_FAILURE":
            return{
                user:null,
                isFetching: false,
                error:action.package,
            };

            case "FOLLOW":
                return{
                    ...state,
                    user:{
                        ...state.user,
                        following: [...state.user.following, action.package],
                    },
                };
    
    
            case "UNFOLLOW":
                return{
                    ...state,
                    user:{
                        ...state.user,
                        following: state.user.following.filter(
                            following => following !== action.package),
                    },
                };
            

        default: 
            return state;
    }

}

export default AUthReducer;