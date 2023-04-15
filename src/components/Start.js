import React from 'react';
import {useNavigate} from "react-router-dom";

const Start = (props) =>
{
    const navigate = useNavigate();

    return (
        <div className={'container form'}>
            <h1>Ready for WAR</h1>
            <form action="#" onSubmit={(e) => {
                e.preventDefault();
                props.changeName(e.target.name.value);
                navigate("/game");
            }}>
                <input type="text" placeholder={'Enter your name'} id={'name'}/>
                <br/>
                <button className={'btn btn-success btn-form'}>Start</button>
            </form>
        </div>
    )
};

export default Start;

