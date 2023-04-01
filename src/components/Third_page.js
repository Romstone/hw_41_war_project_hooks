import Second_page from "./Second_page";
import React, {useState} from 'react';

const ThirdPage = (props) =>
{
    const[playAgainState, setPlayAgainState] = useState(false);

    const playAgain = () =>
    {
        setPlayAgainState(true);
    }

    return (
        !playAgainState ?
            <div className={'container last-field'}>
                <h1>{props.cPoints > props.uPoints ? 'LOSE' : props.cPoints < props.uPoints ? 'WIN' : 'SPARE'}</h1>
                <h2>{props.uPoints} - {props.cPoints}</h2>
                <button className={'btn btn-success'} onClick={playAgain}>Again?</button>
            </div> : <Second_page userName={props.userName}/>
    );
};

export default ThirdPage;
