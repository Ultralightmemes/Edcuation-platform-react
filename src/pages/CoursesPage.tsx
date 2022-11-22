import {useCourses} from "../hooks/courses";
import {Course} from "../components/Course";
import {CategoriesSidebar} from "../components/CategoriesSidebar";
import React, {useEffect, useState} from "react";
import {EducationCourse} from "../models";
import {Link, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";
import {axiosInstance} from "../axios";


export function CoursesPage() {
    const [courses, setCourses] = useState<EducationCourse[]>()

    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState(searchParams.get('filter'))
    console.log(filter + 'filter')
    async function fetchCourses() {
        let url = ''
        if (searchParams.get('filter')) {
            url = 'education/course/?search=' + searchParams.get('filter')
        }
        else {
            url = 'education/course/'
        }
        try {
            const response =
                await axiosInstance.get<EducationCourse[]>(url)
            setCourses(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchCourses();
    }, []);

    const changeFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.currentTarget.value)
    }

    return (
        <div className="flex mx-auto max-w-screen-xl pt-5 ml-10">
            <CategoriesSidebar/>
            <div>
                <div>
                    <form>
                        <div className="flex items-center border-b py-2">
                        <input onChange={changeFilterHandler} type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                               focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                               dark:focus:border-blue-500"/>
                        <Link to={'/courses?filter=' + filter}>
                            {/*<div className="w-11 h-11">rqwer</div>*/}
                        <button type="submit" onClick={fetchCourses}
                                className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4
                                rounded">
                            Поиск
                        </button>
                        </Link></div>
                    </form>
                </div>
                <div className="container">
                    <div className="max-w-screen-2xl gap-10 grid grid-cols-3">
                        {courses?.map(course => <Course course={course} key={course.id}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}