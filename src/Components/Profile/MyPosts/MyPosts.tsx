import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {statePostType} from "../../../Redux/State";


type MyPostsType = {
    postData: statePostType[]
    textNewPost: string
    addNewPost: () => void
    updatePost : (text:string)=>void
}

export const MyPosts = ({postData, textNewPost, ...props}: MyPostsType) => {
    const postDataMap = postData.map(el => <Post key={el.id} id={el.id} textPost={el.textPost} like={el.like}/>)
    let netTextPost = React.createRef<HTMLTextAreaElement>()

    const addNewPost = () => {
        props.addNewPost()
    }
    const updatePost = () => {
        if (netTextPost.current?.value) {
           props.updatePost(netTextPost.current.value)
        }
    }


    return (
        <div className={s.MyPost}>
            <div>
                <textarea ref={netTextPost}
                          value={textNewPost}
                          onChange={updatePost}/>
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

