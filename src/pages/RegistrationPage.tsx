import React, {useState} from "react";
import {axiosInstance} from "../axios";

export function RegistrationPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeFirstNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value)
    }

    const changeLastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.currentTarget.value)
    }

    const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const changePasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const registerHandler = (event: React.FormEvent) => {
        event.preventDefault()
        let response = axiosInstance
            .post(`users/users/`, {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            }).then((response) => {
                if (response.status === 201){
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
            })
        // console.log(response.status)

    }

    return (
        <div>
            <form onSubmit={registerHandler}>
                <div className="text-center">
                    <label htmlFor="firstName" className="text-black">First name</label>
                    <input type="text"
                           className="border py-2 px-4 mb-2 mt-1 w-full outline-0 text-black"
                           placeholder="First name"
                           value={firstName}
                           name="SubmitField"
                           id="firstName"
                           onChange={changeFirstNameHandler}/>
                </div>
                <div className="text-center">
                    <label htmlFor="lastName" className="text-black">Last Name</label>
                    <input type="text"
                           className="border py-2 px-4 mb-2 mt-1 w-full outline-0 text-black"
                           placeholder="Last name"
                           value={lastName}
                           name="SubmitField"
                           id="lastName"
                           onChange={changeLastNameHandler}/>
                </div>
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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}