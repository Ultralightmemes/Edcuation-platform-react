import {EducationCourse} from "../models";
import {useEffect, useState} from "react";
import {axiosInstance} from "../axios";

export function useCourses(id?: string){
    const [courses, setCourses] = useState<EducationCourse[]>([])


    async function fetchCourses() {
        let url = ''
        if (id)
            url = 'education/category/' + id +'/'
        else
            url = 'education/course/'
        try {

            const response =
                await axiosInstance.get<EducationCourse[]>(url)
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