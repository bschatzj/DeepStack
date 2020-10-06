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
        </div >
    )
}