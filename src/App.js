import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Start from "./components/Start";
import {Link, Route, Routes} from "react-router-dom";
import Game from "./components/Game";
import Result from "./components/Result";
import {useState} from "react";

const App = () =>
{
    const[userName, setUserName] = useState('');

    const[points, setPoints] = useState(
        {
            cPoints: 0,
            uPoints: 0
        });

    const changeName = (name) =>
    {
        setUserName(name);
    }

    const changePoints = (cPoints, uPoints) =>
    {
        setPoints({...points, cPoints, uPoints});
    }

    return (
        <>
            <div style={{
                backgroundColor: "lightgray",
                textAlign: "center"
            }}>
                <Link style={{
                    textDecoration: "none",
                }} to="/">Home</Link>
            </div>
            <br/>
            <Routes>
                <Route path="/" element={<Start changeName={changeName}/>}/>
                <Route path="/game" element={<Game userName={userName}
                                                   changePoints={changePoints}/>}/>
                <Route path="/result" element={<Result cPoints={points.cPoints}
                                                       uPoints={points.uPoints}/>}/>
            </Routes>
        </>
    );
}

export default App;
