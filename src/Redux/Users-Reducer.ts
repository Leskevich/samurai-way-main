import {v1} from "uuid";

export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string
    }
}
export type InitialStateType = {
    users: UserType[]
}
const initialState: InitialStateType = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: "Roma",
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: false,
            fullName: "Anton",
            status: 'I am boss to',
            location: {city: 'Grodno', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: true,
            fullName: "Vadim",
            status: 'I am boss to',
            location: {city: 'Grodno', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: false,
            fullName: "Andrey",
            status: 'I am boss to',
            location: {city: 'Zelva', country: 'Belarus'}
        },
    ]
}

export const UsersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(e => e.id === action.id ? {...e, followed: true} : e)}
        case "UN-FOLLOW":
            return {...state, users: state.users.map(e => e.id === action.id ? {...e, followed: false} : e)}
        default:
            return state
    }
};

type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>


export const follow = (userId: string) => {
    return {
        type: 'FOLLOW',
        id: userId
    } as const
}
export const unFollow = (userId: string) => {
    return {
        type: 'UN-FOLLOW',
        id: userId
    } as const
}


