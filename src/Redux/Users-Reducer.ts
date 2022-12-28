export type UserType = {
    name: string
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string
    },
    status: string,
    followed: boolean
}
export type InitialStateType = {
    items: UserType[]
    error: string | null
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
}
const initialState: InitialStateType = {
    items: [
        // {
        //     id: v1(),
        //     followed: true,
        //     fullName: "Roma",
        //     status: 'I am boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: v1(),
        //     followed: false,
        //     fullName: "Anton",
        //     status: 'I am boss to',
        //     location: {city: 'Grodno', country: 'Belarus'}
        // },
        // {
        //     id: v1(),
        //     followed: true,
        //     fullName: "Vadim",
        //     status: 'I am boss to',
        //     location: {city: 'Grodno', country: 'Belarus'}
        // },
        // {
        //     id: v1(),
        //     followed: false,
        //     fullName: "Andrey",
        //     status: 'I am boss to',
        //     location: {city: 'Zelva', country: 'Belarus'}
        // },
    ],
    totalCount: 0,
    currentPage: 1,
    pageSize: 10,
    error: '',
    isFetching: false
}


export const UsersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, items: state.items.map(e => e.id === action.id ? {...e, followed: true} : e)}
        case "UN-FOLLOW":
            return {...state, items: state.items.map(e => e.id === action.id ? {...e, followed: false} : e)}
        case "SET-USERS":
            return {...state, items: action.items}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state,isFetching:action.isFetching}
        default:
            return state
    }
};

export type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>


export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalCount
    } as const
}
export const setUsers = (items: UserType[]) => {
    return {
        type: 'SET-USERS',
        items
    } as const
}
export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        id: userId
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: 'UN-FOLLOW',
        id: userId
    } as const
}


