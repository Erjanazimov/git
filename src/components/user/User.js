import React from 'react';
import {useSelector} from "react-redux";

function User(){
    const userState = useSelector(state => state.users.users);
    console.log(userState)
    if (userState) {
        return (
            <div className="container">
                <div className="card mt-4" style={{width: "18rem"}}>
                    <img src={userState.user_metadata.avatar_url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className="card-text">
                            <ul>
                                <li><span>Логин</span> <b>{userState.user_metadata.user_name}</b></li>
                                <li><span>E-mail</span> <b>{userState.user_metadata.email}</b></li>
                                <li><span>Компания</span> <b>нету</b></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <h1 className="text-center mt-5">
            Загрузка...
        </h1>
    )
};

export default User;