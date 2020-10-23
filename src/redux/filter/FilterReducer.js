export const checkReducer = (state = {
   option: '',
   check1: [],
   check2: [],
   check3: []   
}, action) => {
    switch (action.type) {
    
            case "CHANGE_CHECK":
                return {...state, option: action.payload}
            
            case "CHANGE_CHECKS":
                
                return {...state, check1: action.payload.checked1, check2: action.payload.checked2, check3: action.payload.checked3 }
        
        default:
            return state;


        
            
    }   
}
