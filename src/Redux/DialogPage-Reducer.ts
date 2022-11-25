import {dialogPageType, stateDialogType, stateMessageType} from "./State";

export const dialogReducer = (state: dialogPageType, action: DialogReducerType) => {
    switch (action.type) {
        case "NEW-TEXT-POST": {
            state.newMessageBody = action.value
           return state
        }
        case "ADD-NEW-MESSAGE":{
            const newName:stateDialogType = {name:"Adi",id:5}
            const newMessage:stateMessageType = {
                message:state.newMessageBody,
                id:5
            }
            state.message.push(newMessage)
            state.dialog.push(newName)
            state.newMessageBody=''
            return state
        }
        default:
            return state
    }
}

export type DialogReducerType = NewTextMessageACType | AddNewMessageACType
export type NewTextMessageACType = ReturnType<typeof newTextMessageAC>
export type AddNewMessageACType = ReturnType<typeof addNewMessageAC>


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