import React, {useState} from "react";
import {useCourses} from "../hooks/courses";
import {CoursesStudy} from "../components/CoursesStudy";
import {axiosInstance} from "../axios";
import {EducationCourse} from "../models";

export function UserCourses() {
    const {courses} = useCourses('', true)
    console.log(courses)
    return (
        <div className="flex mx-auto max-w-screen-xl pt-5 ml-6">
            <div className="grid grid-cols-4 gap-3">
                {courses?.map(course => <CoursesStudy course={course} key={course.id}/>)}
            </div>
        </div>
    )
}