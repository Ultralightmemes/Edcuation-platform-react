import React, {useEffect, useState} from "react";
import {axiosInstance} from "../axios";
import {User} from "../models";
import {AxiosError} from "axios";

export function Profile() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [is_staff, setIsStaff] = useState(false)
    const [image_url, setImageURL] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const response =
                    await axiosInstance.get<User>('users/user')
                setEmail(response.data.email)
                setFirstName(response.data.first_name)
                setLastName(response.data.last_name)
                setPatronymic(response.data.patronymic)
                setImageURL(response.data.image)
                setIsStaff(response.data.is_staff)
                console.log(response)
            } catch (e) {
                const error = e as AxiosError
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    const studentChangeHandler = (event: React.FormEvent) => {
        event.preventDefault()
        axiosInstance
            .patch(`users/user/`, {
                first_name: firstName,
                last_name: lastName,
                email: email,
                patronymic: patronymic,
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
    }


    const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }
    const changeFirstNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value)
    }
    const changeLastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.currentTarget.value)
    }
    const changePatronymicHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPatronymic(event.currentTarget.value)
    }

    return (
        <div className="flex">
            <div className="w-1/5">

            </div>
            <div className="w-1/5">
                <img src={'http://127.0.0.1:8000' + image_url}/>
                <form id="form">
                    {/*<input disabled type="file" id="file"/>*/}
                    {/*<button type="submit">Submit</button>*/}
                </form>
            </div>

            <div className="2/5">
                <form onSubmit={studentChangeHandler}>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Email</span>
                        <input type="text" onChange={changeEmailHandler} defaultValue={email} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">First Name</span>
                        <input type="text" onChange={changeFirstNameHandler} defaultValue={firstName}
                               className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Last Name</span>
                        <input type="text" onChange={changeLastNameHandler} defaultValue={lastName}
                               className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Patronymic</span>
                        <input type="text" onChange={changePatronymicHandler} defaultValue={patronymic}
                               className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Staff</span>
                        <input type="checkbox" defaultChecked={is_staff} disabled
                               className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}