import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../Redux/Users-Reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    totalCount:number
    users: UserType[]
    pageSize: number,
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getPage:(page:number)=>void
    currentPage:number
}

export const Users = (props: UsersType) => {
    const {users,pageSize,follow,unFollow,getPage,totalCount,currentPage} = props


    const usersMap = users.map((e: any) => {
        const buttonFriend = e.followed ?
            <button onClick={() => unFollow(e.id)}>unFollow</button>
            : <button onClick={() => follow(e.id)}>follow</button>

        const iconAvatar = "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"

        return (

            <div key={e.id} className={s.container}>
                <div>
                    <div>
                        <NavLink to={`/Profile/${e.id}`}>
                            <img src={e.photos.small ? e.photos.small : iconAvatar}
                                 alt="тут фото"
                                 className={s.avatar}
                            />
                        </NavLink>


                    </div>
                    {buttonFriend}
                </div>
                <div className={s.info}>
                    <div>
                        <div>{e.name}</div>
                        <div>{e.status}</div>
                    </div>
                    <div>
                        {/*<div>{e.location.country}</div>*/}
                        {/*<div>{e.location.city}</div>*/}
                    </div>
                </div>
            </div>
        )
    })
    const pageCount = Math.ceil(totalCount / pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((e, index) =>
                    <span key={index}
                          onClick={() => getPage(e)}
                    className={currentPage===e ? s.activePage:''}
                    >
                        {e}
                    </span>)
                }
            </div>
            {usersMap}
        </div>
    );
}





