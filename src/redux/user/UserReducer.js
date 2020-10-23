export const userReducer = (state = {
    counter : 1,
    users: []
   
}, action) => {
    switch (action.type) {
    
            case "CHANGE_USERS":
                return {...state, users: [...state.users, action.payload], counter: state.counter + 1}
                

        default:
            return state;


        
            
    }   
}

