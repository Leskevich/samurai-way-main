import React from 'react';
import {Dialogs} from "./Dialogs";
import {
    addNewMessageAC,
    DialogReducerType,
    newTextMessageAC,
    stateDialogType,
    stateMessageType
} from "../../Redux/DialogPage-Reducer";
import {stateType} from "../../Redux/Redux-Store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    dialog: stateDialogType[]
    message: stateMessageType[]
    newMessageBody: string
}
type MapDispatchToPropsType = {
    newTextMessage: (text: string) => void
    addNewMessage: () => void
}
export type DialogsContainerType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: stateType): MapStateToPropsType => {
    return {
        dialog: state.dialogPage.dialog,
        message: state.dialogPage.message,
        newMessageBody: state.dialogPage.newMessageBody,
    }
}
const mapDispatchToProps = (dispatch: (action: DialogReducerType) => void): MapDispatchToPropsType => {
    return {
        newTextMessage: (text: string) => {
            dispatch(newTextMessageAC(text))
        },
        addNewMessage: () => {
            dispatch(addNewMessageAC())
        }
    }

}

export const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

