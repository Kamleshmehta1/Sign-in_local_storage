import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignInPage() {

    let history = useNavigate()

    let user = useRef(null)
    let pass = useRef(null)


    var totalUsers = localStorage.getItem("userName").split(",");
    var totalPass = localStorage.getItem("passWord").split(",");

    const handleClick = () => {

        let left = totalUsers.filter((ele) => {
            return ele === user.current.value
        })

        let right = totalPass.filter((ele) => {
            return ele === pass.current.value
        })

        let l = left.toString()
        let r = right.toString()

        if (l.localeCompare(r)) {
            console.log(true);
            history("/Welcome")
        }
    }


    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <h1>SIGN IN</h1>
            UserName :<input type="text" ref={user} required />
            <br />
            Password :<input type="password" ref={pass} required />
            <button onClick={() => handleClick()}>SIGN IN</button>
        </div>
    )
}

export default SignInPage