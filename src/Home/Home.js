import React from 'react'
import IMG from '../Images/logo.png'
import './Home.css'
export default function Home() {



    return (
        <div className="HomePage">
            <img className="Logo" src={IMG} />
            <h1 className="Welcome">
                Welcome To Deep Stack Poker
            </h1>

            <div className="WaitList">

                <h1 className="GamesTitle">Games Running</h1>
                <div className="Games">
                    <div className="Game">
                        <div className="GameInfo">
                            <h1 className="GameTitle">1-2 NL Holdem</h1>
                            <button className="ListButton">Get on List</button>
                        </div>
                    </div>
                    <div className="Game">
                        <div className="GameInfo">
                            <h1 className="GameTitle">2-5 NL Holdem</h1>
                            <button className="ListButton">Get on List</button>
                        </div>
                    </div>
                    <div className="Game">
                        <div className="GameInfo">
                            <h1 className="GameTitle">2-2 PLO</h1>
                            <button className="ListButton">Get on List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}