import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/SignIn">Sign In</Link>
                </li>
                <li>
                    <Link to="/SignUp">Sign Up</Link>
                </li>
            </ul>
        </div>
    )
}

export default Layout