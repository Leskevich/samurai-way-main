
export type stateDialogType = {
    name: string
    id: number
}
export type stateMessageType = {
    message: string
    id: number
}
export type dialogPageType = {
    dialog: stateDialogType[]
    message: stateMessageType[]
    newMessageBody: string
}
const initialState: dialogPageType = {
    dialog: [
        {name: 'roma', id: 1},
        {name: 'vadim', id: 2},
        {name: 'anton', id: 3},
        {name: 'andrei', id: 4},
    ],
    message: [
        {message: 'hi', id: 1},
        {message: 'ho', id: 2},
        {message: 'ky', id: 3},
        {message: 'vai', id: 4},
    ],
    newMessageBody: ''
}

export const dialogPage = (state: dialogPageType = initialState, action: DialogReducerType): dialogPageType => {

    switch (action.type) {
        case "NEW-TEXT-POST":
            return {...state, newMessageBody: action.value}


        case "ADD-NEW-MESSAGE":
            const newName: stateDialogType = {name: "Adi", id: 5}
            const newMessage: stateMessageType = {
                message: state.newMessageBody,
                id: 5
            }
            return {
                ...state,
                message: [...state.message, newMessage],
                dialog: [...state.dialog, newName],
                newMessageBody: ''
            }

        default:
            return state
    }
}

export type DialogReducerType =
    ReturnType<typeof newTextMessageAC> |
    ReturnType<typeof addNewMessageAC>


export const newTextMessageAC = (value: string) => {
    return {
        type: 'NEW-TEXT-POST',
        value
    } as const
}
export const addNewMessageAC = () => {
    return {
        type: 'ADD-NEW-MESSAGE',
    } as const
}