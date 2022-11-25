import {profilePageType, statePostType} from "./State";


export const profileReducer = (state: profilePageType, action: ProfileReducerType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: statePostType = {
                id: 3,
                textPost: state.textNewPost,
                like: 7
            }
            state.posts.push(newPost)
            state.textNewPost = ''
            return state

        }
        case "UPDATE-NEW-POST": {
            state.textNewPost = action.value

            return state
        }
        default:
            return state
    }
};

export type ProfileReducerType = AddPostACType | UpdateNewPostACType

export type AddPostACType = ReturnType<typeof AddPostAC>
export type UpdateNewPostACType = ReturnType<typeof UpdateNewPostAC>

export const AddPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const UpdateNewPostAC = (value: string) => {
    return {
        type: "UPDATE-NEW-POST",
        value,
    } as const
}

