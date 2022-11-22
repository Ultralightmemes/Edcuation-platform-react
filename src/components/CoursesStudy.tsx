import {EducationCourse} from "../models";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

interface CoursesStudyProps {
    course: EducationCourse
}

export function CoursesStudy({course}: CoursesStudyProps) {
    let percents = 'w-' + course.percents + '%'
    console.log(percents)
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <Link to={'../../courses/' + course.id + '/lesson'} className="text-black hover:text-gray-600 mr-3">
                <div className="max-w-sm rounded overflow-hidden shadow-lg place-items-center grid">
                    <img className="w-72 h-72 ml-3" src={course.image}
                         alt="Sunset in the mountains"></img>
                    <h1 className="font-bold text-7xl absolute -mt-6 z-0">{course.name}</h1>
                </div>
                <div className={"w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 h-2.5"}>
                    <div
                        className={"bg-blue-600 rounded-full dark:bg-blue-500 " + percents + " h-1.5"}>
                    </div>

                </div>

            </Link>
            <button
                className="text-black bg-gray-200 bg-opacity-40 border-1 border-black hover:bg-gray-400 hover:bg-opacity-40 font-bold text-sm px-3 py-3
                 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 -mt-20 ease-linear
                 transition-all duration-150 absolute"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Оценить
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Оцените курс
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="rating-hidden"/>
                                        <input type="radio" name="rating-2" id={course.name + "1"}
                                               className="mask mask-star-2 bg-orange-400"/>
                                        <input type="radio" name="rating-2" id={course.name + "2"}
                                               className="mask mask-star-2 bg-orange-400"/>
                                        <input type="radio" name="rating-2" id={course.name + "3"}
                                               className="mask mask-star-2 bg-orange-400"/>
                                        <input type="radio" name="rating-2" id={course.name + "4"}
                                               className="mask mask-star-2 bg-orange-400"/>
                                        <input type="radio" name="rating-2" id={course.name + "5"}
                                               className="mask mask-star-2 bg-orange-400"/>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Закрыть
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Сохранить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </div>
    )
}