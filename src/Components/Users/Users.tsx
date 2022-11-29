import React from 'react';
import {UserPropsType} from "./ContainerUsers";
import s from './Users.module.css'

export const Users = ({users, follow, unFollow, ...props}: UserPropsType) => {

    const usersMap = users.map(e => {
        const buttonFriend = e.followed ?
            <button onClick={() => unFollow(e.id)}>unFollow</button>
            : <button onClick={() => follow(e.id)}>follow</button>
        return (
            <div key={e.id} className={s.container}>
                <div>
                    <div >
                        <img src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                             alt="тут фото"
                             className={s.avatar}
                        />
                    </div>

                    {buttonFriend}

                </div>
                <div className={s.info}>
                    <div>
                        <div>{e.fullName}</div>
                        <div>{e.status}</div>
                    </div>
                    <div>
                        <div>{e.location.country}</div>
                        <div>{e.location.city}</div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {usersMap}
        </div>
    );
};

