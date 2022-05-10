import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [name, setName] = useState(["kamlesh"]);
    const [pass, setPass] = useState(["1234"]);

    useEffect(() => {
        if (localStorage.getItem("userName") == null) {
            localStorage.setItem("userName", name)
            localStorage.setItem("passWord", pass)
        }
    }, [])

    const debounce = (fn, delay) => {
        let timer
        return function (...args) {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                fn(...args)
            }, delay);
        }
    }

    const handleChange = debounce((e) => {
        if (e.target.className === "username") {
            localStorage.getItem("userName") === null ? setName(e.target.value) : setName((...oldArray) => [...oldArray, e.target.value]);
        } else if (e.target.className === "password") {
            localStorage.getItem("passWord") === null ? setPass(e.target.value) : setPass((...oldArray) => [...oldArray, e.target.value]);
        }
    }, 500)

    const handleClick = () => {
        localStorage.setItem("userName", name)
        document.querySelector(".username").value = "";
        localStorage.setItem("passWord", pass)
        document.querySelector(".password").value = "";
    }
    const handleClear = () => {
        localStorage.clear();
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <br />
            <h1>SIGNUP</h1>
            userName :
            <input type="text" className='username' required onChange={handleChange} />
            <br />
            Password :
            <input type="password" className='password' required onChange={handleChange} />
                <button onClick={handleClick}>SIGN UP</button>
                <button onClick={handleClear}>CLEAR</button>
        </div>
    )
}

export default SignUpPage