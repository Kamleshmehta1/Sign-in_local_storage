import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <div>
            <h1>WELCOME</h1>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default Welcome