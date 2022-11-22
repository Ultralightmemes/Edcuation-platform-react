import {EducationCourse} from "../models";
import {useEffect, useState} from "react";
import {axiosInstance} from "../axios";

export function useUserCourses(){
    const [courses, setCourses] = useState<EducationCourse[]>([])


    async function fetchCourses() {
        try {

            const response =
                await axiosInstance.get<EducationCourse[]>('education/course/my/')
            console.log(response)
            setCourses(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCourses()
    }, [])
    return {courses}
}