import {v1} from "uuid";

export type statePostType = {
    id: string,
    textPost: string,
    like: number
}
export type userProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
type profilePageType = {
    posts: statePostType[]
    textNewPost: string
    profile: userProfileType | null
}

const initialState: profilePageType = {
    posts: [
        {id: v1(), textPost: 'post1', like: 4},
        {id: v1(), textPost: 'post2', like: 5},
    ],
    textNewPost: '',
    profile: null
}

export const profilePage = (state: profilePageType = initialState, action: ProfileReducerType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: statePostType = {
                id: v1(),
                textPost: state.textNewPost,
                like: 7
            }
            return {...state, posts: [newPost, ...state.posts], textNewPost: ''}
        }
        case "UPDATE-NEW-POST":
            return {...state, textNewPost: action.value}
        case "GET=PROFILE-USER":
            return {...state, profile: action.userProfile}
        default:
            return state
    }
};

export type ProfileReducerType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostAC>
    | ReturnType<typeof setProfileUser>


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
export const setProfileUser = (userProfile: userProfileType) => {
    return {
        type: 'GET=PROFILE-USER',
        userProfile
    } as const
}

