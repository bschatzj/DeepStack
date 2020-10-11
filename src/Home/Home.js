import React, { useEffect, useState } from 'react'
import IMG from '../Images/logo.png'
import './Home.css'
import { useComponentVisible } from '../Utils/OutsideClickHook'
import axios from 'axios'

export default function Home() {
    const [signingUp, setSigningUp] = useState({
        game: "",
        name: "",
        phone: ""
    })

    const [players, setPlayers] = useState([])


    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(false);


    const handleChange = e => {
        console.log(e)
        setSigningUp({
            ...signingUp,
            [e.target.name]: e.target.value
        })
    }

    const handleJoin = (name) => {
        setIsComponentVisible(true)
        setSigningUp({ ...signingUp, game: name })
    }


    useEffect(() => {
        axios.get('https://deep-stack.herokuapp.com/api/allgames')
            .then(res => {
                console.log(res)
                setPlayers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    console.log(players)
    const join = (e) => {
        e.preventDefault()
        axios.post('https://deep-stack.herokuapp.com/api/checkin', signingUp)
            .then(res => {
                setPlayers([...players, signingUp])
                console.log(res)
            })
            .then(setPlayers([...players, signingUp]))
            .catch(err => {
                console.log(err)
            })
    }

    console.log(signingUp)
    return (
        <div className="HomePage">
            <img className="Logo" src={IMG} />
            <h1 className="Welcome">
                Welcome To Deep Stack Poker
            </h1>

            <div className="WaitList">

                <h1 className="GamesTitle">Games Running</h1>
                <div className={isComponentVisible ? "modal-back" : "modal-back-off"} />
                <div ref={ref} className={isComponentVisible ? "main-modal" : "hiddenModal"}>
                    <form className="Signup">
                        <div className="inputHolder">
                            <label className="formLabel">Game</label>
                            <input className="signUpForm" value={signingUp.game} name="game" readOnly />
                        </div>
                        <div className="inputHolder">
                            <label className="formLabel">Name</label>
                            <input className="signUpForm" name="name" onChange={handleChange} value={signingUp.name} />
                        </div>
                        <div className="inputHolder">
                            <label className="formLabel">Phone Number</label>
                            <input className="signUpForm" name="phone" onChange={handleChange} value={signingUp.phone} />
                        </div>
                        <button className="Confirm" onClick={join}>Confirm</button>
                    </form>
                </div>
                <div className="Games">
                    <div className="Game">
                        <div className="GameInfo">
                            <h1 className="GameTitle">1-2 NL Holdem</h1>
                            <button onClick={() => { handleJoin("1-2 NL") }} className="ListButton">Get on List</button>
                        </div>
                        {players.filter(players => players.GameName == "1-2 NL").map(player => (
                            <h1>{player.DisplayName}</h1>
                        ))}
                    </div>
                    <div className="Game">
                        <div className="GameInfo">
                            <h1 className="GameTitle">2-5 NL Holdem</h1>
                            <button onClick={() => { handleJoin("2-5 NL") }} className="ListButton">Get on List</button>
                        </div>
                        {players.filter(players => players.GameName == "2-5 NL").map(player => (
                            <h1>{player.DisplayName}</h1>
                        ))}
                    </div>
                    <div className="Game">
                        <div className="GameInfo">
                            <h1 className="GameTitle">2-2 PLO</h1>
                            <button onClick={() => { handleJoin("2-2 PLO") }} className="ListButton">Get on List</button>
                        </div>
                        {players.filter(players => players.GameName == "2-2 PLO").map(player => (
                            <h1>{player.DisplayName}</h1>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}