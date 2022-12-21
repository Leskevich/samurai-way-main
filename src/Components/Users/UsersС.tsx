import React from 'react';

import s from './Users.module.css'
import axios from "axios";
import {InitialStateType} from "../../Redux/Users-Reducer";
import {UserPropsType} from "./ContainerUsers";


export class UsersC extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get<InitialStateType>("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                this.props.setUsers(res.data.items)
                console.log(res.data.items)
            })
    }

    render() {
        const usersMap = this.props.users.map((e:any) => {
            const buttonFriend = e.followed ?
                <button onClick={() => this.props.unFollow(e.id)}>unFollow</button>
                : <button onClick={() => this.props.follow(e.id)}>follow</button>

            const iconAvatar = "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
            return (
                <div key={e.id} className={s.container}>
                    <div>
                        <div>
                            <img src={e.photos.small ? e.photos.small : iconAvatar}
                                 alt="тут фото"
                                 className={s.avatar}
                            />
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
        return (
            <div>

                {usersMap}
            </div>
        );
    }
}




