export const changeCheck = (payload) => (dispatch) => {
    return (
        dispatch({
            type: "CHANGE_CHECK",
            payload
            
        })
    )
}

export const changeChecks = (payload) => (dispatch) => {
    return (
        dispatch({
            type: "CHANGE_CHECKS",
            payload
            
        })
    )
}


