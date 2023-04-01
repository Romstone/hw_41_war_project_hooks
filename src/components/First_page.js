import Second_page from "./Second_page";
import React, {useState} from 'react';

const FirstPage = () =>
{
    const[userName, setUserName] = useState('');

    const changeName = (name) =>
    {
        setUserName(name);
    }

    return (
        !userName ?
            <div className={'container form'}>
                <h1>Ready for WAR</h1>
                <form action="#" onSubmit={(e) => {
                    e.preventDefault();
                    changeName(e.target.name.value);
                }}>
                    <input type="text" placeholder={'Enter your name'} id={'name'}/>
                    <br/>
                    <button className={'btn btn-success btn-form'}>Start</button>
                </form>
            </div> : <Second_page userName={userName}/>
    )
};

export default FirstPage;

