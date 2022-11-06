import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.Items}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSXyHxG4IoE4Xyw3ZTOvf2Kml7xmTZOI-8g&usqp=CAU" alt="фото иконки"/>
            </div>
                <div className={s.item}>post1</div>
        </div>
    );
};

