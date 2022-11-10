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
}
export type dialogPageType = {
    dialog: stateDialogType[]
    message: stateMessageType[]
}
export type stateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}
export const state: stateType = {
    profilePage: {
        posts: [
            {id: 1, textPost: 'post1', like: 4},
            {id: 2, textPost: 'post2', like: 5},
        ]
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
}



