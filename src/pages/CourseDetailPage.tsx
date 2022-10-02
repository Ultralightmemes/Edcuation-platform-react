import React from "react";
import {useParams} from "react-router-dom";
import {useCourseDetail} from "../hooks/courseDetail";
// import {CourseWithTheme} from "../components/CourseWithThemes";
// import {FollowCourse} from "../hooks/followCourse";
import {axiosInstance} from "../axios";

type CourseDetailPageParams = {
    id: string
}

export function CourseDetailPage() {
    const {id} = useParams<CourseDetailPageParams>()
    const {course} = useCourseDetail(id)

    return (
        <div className="grid place-items-center">
            <div className="text-center mt-5 ">
                <h1 className="text-5xl">{course?.course_name}</h1>
            </div>
            {/*<button onClick={() => FollowCourse(id)}>*/}
            {/*    Подписаться*/}
            {/*</button>*/}
            <p className="w-11/12 text-justify ml-6 mr-6 text-xl mt-3 indent-12">
                {course?.course_description}
            </p>
            {/*<div className="bg-yellow-50 w-11/12">*/}
            {/*    {course?.themes.map(theme => <CourseWithTheme theme={theme} key={theme.id}/>)}*/}
            {/*</div>*/}
        </div>
    )

}