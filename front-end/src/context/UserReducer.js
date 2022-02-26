
const UserReducer = (state, action) =>{
    switch(action.type){
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

export default UserReducer;