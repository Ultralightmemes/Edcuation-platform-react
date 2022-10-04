import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white ">
            <div>
                <span className="font-bold mr-2">
                    <Link to="/">Education</Link>
                </span>
                <span>
                    <Link to="/courses">Courses</Link>
                </span>
            </div>
            <div>
                <span className="mr-2">
                    <Link to="/student/courses">My Courses</Link>
                </span>
                {!localStorage.getItem('refresh_token') && <Link to="/login"><button>Login</button></Link>}
                {localStorage.getItem('refresh_token') && <Link to="/profile"><button>Profile</button></Link>}
            </div>
        </nav>
    )
}