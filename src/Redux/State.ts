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
    addPost: () => void
    updateNewPost: (value: string) => void
    dispatch: (action: ActionType) => void
}
export type ActionType = AddPostActionType | UpdateNewPostActionType
type AddPostActionType = { type: 'ADD-POST' }
type UpdateNewPostActionType = { type: 'UPDATE-NEW-POST',value: string }

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
            ]
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
    addPost() {
        let newPost: statePostType = {
            id: 3,
            textPost: this._state.profilePage.textNewPost,
            like: 7
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.textNewPost = ''
        this.callSubscriber()
    },
    updateNewPost(value: string) {
        this._state.profilePage.textNewPost = value
        this.callSubscriber()
    },
    dispatch(action:ActionType) {
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
            case "UPDATE-NEW-POST":{
                this._state.profilePage.textNewPost = action.value
                this.callSubscriber()
                break
            }
        }
    }
}






