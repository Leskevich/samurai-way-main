import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.Profile}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VWPvGxGbsNquVt-BGE2P1DALIT_moFJ_BQ&usqp=CAU"
                    alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                my post
            </div>
            <div>
                new post
            </div>
            <div>
                <div>post1</div>
                <div>post2</div>
                <div>post3</div>
            </div>
        </div>
    );
};

