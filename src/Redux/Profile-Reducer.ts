import {v1} from "uuid";

export type statePostType = {
    id: string,
    textPost: string,
    like: number
}
type profilePageType = {
    posts: statePostType[]
    textNewPost: string
}
const initialState: profilePageType = {
    posts: [
        {id: v1(), textPost: 'post1', like: 4},
        {id: v1(), textPost: 'post2', like: 5},
    ],
    textNewPost: ''
}

export const profilePage = (state: profilePageType = initialState, action: ProfileReducerType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: statePostType = {
                id: v1(),
                textPost: state.textNewPost,
                like: 7
            }
            return {...state, posts: [...state.posts, newPost], textNewPost: ''}
        }
        case "UPDATE-NEW-POST":
            return {...state, textNewPost: action.value}
        default:
            return state
    }
};

export type ProfileReducerType = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostAC>


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

