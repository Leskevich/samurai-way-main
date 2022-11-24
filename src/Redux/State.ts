export type statePostType = {
    id: number,
    textPost: string,
    like: number
}
export type stateDialogType = {
    name: string
    id: number
}
export type stateMessageType = {
    message: string
    id: number
}
export type profilePageType = {
    posts: statePostType[]
    textNewPost: string
}
export type dialogPageType = {
    dialog: stateDialogType[]
    message: stateMessageType[]
    newMessageBody: string
}
export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}
export type storeType = {
    _state: stateType
    getState: () => stateType
    callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}


export const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, textPost: 'post1', like: 4},
                {id: 2, textPost: 'post2', like: 5},
            ],
            textNewPost: ''

        },
        dialogPage: {
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
            newMessageBody: ' '
        }
    },
    getState() {
        return this._state
    },
    callSubscriber() {

    },
    subscribe(observer: () => void) {
        this.callSubscriber = observer
    },

    dispatch(action: ActionType) {
        switch (action.type) {
            case "ADD-POST": {
                let newPost: statePostType = {
                    id: 3,
                    textPost: this._state.profilePage.textNewPost,
                    like: 7
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.textNewPost = ''
                this.callSubscriber()
                break
            }
            case "UPDATE-NEW-POST": {
                this._state.profilePage.textNewPost = action.value
                this.callSubscriber()
                break
            }
            case "NEW-TEXT-POST": {
                this._state.dialogPage.newMessageBody = action.value
                this.callSubscriber()

                break
            }
            case "ADD-NEW-MESSAGE":{
                const newName:stateDialogType = {name:"Adi",id:5}
                const newMessage:stateMessageType = {
                    message:this._state.dialogPage.newMessageBody,
                    id:5
                }
                this._state.dialogPage.message.push(newMessage)
                this._state.dialogPage.dialog.push(newName)
                this.callSubscriber()
                this._state.dialogPage.newMessageBody=''

            }


        }
    }
}
export const AddPostAction = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}
export const UpdateNewPostAction = (value: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST",
        value,
    }
}
export const newTextMessageAction = (value: string): NewTextMessageActionType => {
    return {
        type: 'NEW-TEXT-POST',
        value
    }
}
export const addNewMessageAction = ():AddNewMessageActionType => {
    return {
        type: 'ADD-NEW-MESSAGE',
    }
}

export type ActionType = AddPostActionType
    | UpdateNewPostActionType
    | NewTextMessageActionType
    | AddNewMessageActionType

type AddPostActionType = { type: "ADD-POST" }
type UpdateNewPostActionType = { type: "UPDATE-NEW-POST", value: string }
type NewTextMessageActionType = { type: 'NEW-TEXT-POST', value: string }
type AddNewMessageActionType = { type: 'ADD-NEW-MESSAGE' }




