//use this when api doesn't work
// import {deckShuffler} from "../utils/instruments";
// import {deck} from "../utils/constants";
import React, {useEffect, useState} from 'react';
import DataRepository from "../repository/repository";
import {useNavigate} from "react-router-dom";

const Game = (props) =>
{
    const navigate = useNavigate();

    const dataRepository = new DataRepository();

    const[deckState, setDeckState] = useState({
        compDeck: [],
        userDeck: [],
        compCurrentCard: '',
        userCurrentCard: '',
        cPoints: 0,
        uPoints: 0
    });

    useEffect(() => {
        try
        {
            const deck = dataRepository.getDeck();
            console.log(deck);
            const compDeck = deck.slice(deck.length / 2);
            const userDeck = deck.slice(0, deck.length / 2);
            console.log(compDeck, userDeck);
            setDeckState({...deckState, compDeck, userDeck});
        }
        catch (e)
        {
            console.log(e.message);
        }
    }, [])

    const putCards = () =>
    {
        if (deckState.compDeck.length > 0)
        {
            const compCard = deckState.compDeck.pop();
            const userCard = deckState.userDeck.pop();
            console.log(`cCard: ${compCard.value}, uCard: ${userCard.value}`);
            if (+compCard.value > +userCard.value)
                setDeckState({...deckState, compCurrentCard: compCard, userCurrentCard: userCard, cPoints: deckState.cPoints+1});
            else if (+compCard.value < +userCard.value)
                setDeckState({...deckState, compCurrentCard: compCard, userCurrentCard: userCard, uPoints: deckState.uPoints+1});
            else
                setDeckState({...deckState, compCurrentCard: compCard, userCurrentCard: userCard});
        } else
        {
            props.changePoints(deckState.cPoints, deckState.uPoints);
            navigate("/result");
        }
    }

    return (
        <div className={'container field'}>
            <div className={'half-field'}>
                <h1>Computer</h1>
                <h3>Points: {deckState.cPoints}</h3>
                <div className={'comp-card'} style={{backgroundImage: `url(${deckState.compCurrentCard.image})`, backgroundSize: '150px'}}></div>
            </div>
            <hr/>
            <div>
                <div className={'user-card'} style={{backgroundImage: `url(${deckState.userCurrentCard.image})`, backgroundSize: '150px'}}></div>
                <h1 className={'user-name'}>{props.userName}</h1>
                <h3 className={'user-points'}>Points: {deckState.uPoints}</h3>
            </div>
            <button className={'btn btn-success btn-next'} onClick={putCards}>Next</button>
        </div>
    );
};

export default Game;
