import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ActionType, statePostType} from "../../../Redux/State";


type MyPostsType = {
    postData: statePostType[]
    textNewPost: string
    dispatch:(action:ActionType)=>void
}

export const MyPosts = ({postData, textNewPost,dispatch}: MyPostsType) => {
    const postDataMap = postData.map(el => <Post key={el.id} id={el.id} textPost={el.textPost} like={el.like}/>)
    let netTextPost = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        if (netTextPost.current) {
            dispatch({type:"ADD-POST"})
        }
    }
    const updetePost = () => {
        if (netTextPost.current?.value) {
           dispatch({type:"UPDATE-NEW-POST",value:netTextPost.current?.value})
        }
    }


    return (
        <div className={s.MyPost}>
            <div>
                <textarea ref={netTextPost}
                          value={textNewPost}
                          onChange={updetePost}/>
            </div>
            <div>
                <button onClick={addNewPost}>add Post</button>
            </div>
            <div>
                {postDataMap}
            </div>
        </div>
    );
};

