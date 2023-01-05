import React from 'react';
import s from './Header.module.css'

type HeaderPropsType={
    isAuth: boolean
    login:string|null
}

export const Header = (props:HeaderPropsType) => {
    const {isAuth,login}=props
    return (
            <header className={s.Header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gfp930fT_4SQpE5_wenUf0IUqKfiVO4Ksw&usqp=CAU"
                    alt="тут лого"/>
                <div>
                    {isAuth?login:'Login'}
                </div>
            </header>
    );
};

