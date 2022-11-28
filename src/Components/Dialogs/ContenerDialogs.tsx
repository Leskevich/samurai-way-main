import React from 'react';
import {Dialogs} from "./Dialogs";
import {addNewMessageAC, DialogReducerType, newTextMessageAC} from "../../Redux/DialogPage-Reducer";
import {stateType} from "../../Redux/Redux-Store";
import {connect} from "react-redux";


const mapStateToProps = (state: stateType) => {
    return {
        dialog: state.dialogPage.dialog,
        message: state.dialogPage.message,
        newMessageBody: state.dialogPage.newMessageBody,
    }
}
const mapDispatchToProps = (dispatch: (action: DialogReducerType) => void) => {
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

