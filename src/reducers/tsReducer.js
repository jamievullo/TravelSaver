const tsReducer = (state = {
        user: {}
    }, action) => {
    
    switch(action.type) {
        case "ADD_NEW_USER": 
            const {email, id} = action.payload
            const newUser = { email, id }
            return {
                ...state,
                user: Object.assign(newUser)
            }
        default: 
            return state
    }

}



export default tsReducer

