export type AuthType = {
    id: number | null
    email: string | null
    login: string | null

}
export type AuthStateType = {
    auth: AuthType
    isAuth: boolean
}

type actionType = ReturnType<typeof setLoginData>

const initialState: AuthStateType = {
    auth: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}


export const AuthReducer = (state: AuthStateType = initialState, action: actionType): AuthStateType => {
    switch (action.type) {
        case "SET-LOGIN-DATA":
            return {...state, auth:{...state.auth,...action.data},isAuth:true}

        default:
            return state
    }
}

export const setLoginData = (data: AuthType) => {
    return {
        type: 'SET-LOGIN-DATA',
        data
    } as const
}