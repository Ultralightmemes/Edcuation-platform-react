import React, {useState} from "react";
import {axiosInstance} from "../axios";
import {Link} from "react-router-dom";

export function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const changePasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const registerHandler = (event: React.FormEvent) => {
        event.preventDefault()
        axiosInstance
            .post(`api/token/`, {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res)
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers.common['Authorization'] =
                    'Bearer ' + localStorage.getItem('access_token');
            })
    }

    return (
        <div>
            <form onSubmit={registerHandler}>
                <div className="text-center">
                    <label htmlFor="email" className="text-black">Email</label>
                    <input type="email"
                           className="border py-2 px-4 mb-2 mt-1 w-full outline-0 text-black"
                           placeholder="Email"
                           value={email}
                           name="SubmitField"
                           id="email"
                           onChange={changeEmailHandler}/>
                </div>
                <div className="text-center">
                    <label htmlFor="password" className="text-black">Password</label>
                    <input type="password"
                           className="border py-2 px-4 mb-2 mt-1 w-full outline-0 text-black"
                           placeholder="Email"
                           value={password}
                           name="SubmitField"
                           id="password"
                           onChange={changePasswordHandler}/>
                </div>
                <button type="submit">Login</button>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </form>
        </div>
    )
}