import React from 'react';
import {useNavigate} from "react-router-dom";

const Result = (props) =>
{
    const navigate = useNavigate();

    const onClickHandler = () =>
    {
        navigate("/game");
    }

    return (
        <div className={'container last-field'}>
            <h1>{props.cPoints > props.uPoints ? 'LOSE' : props.cPoints < props.uPoints ? 'WIN' : 'SPARE'}</h1>
            <h2>{props.uPoints} - {props.cPoints}</h2>
            <button className={'btn btn-success'} onClick={onClickHandler}>Again?</button>
        </div>
    );
};

export default Result;
