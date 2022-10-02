import {useEffect, useState} from "react";
import {EducationCourse} from "../models";
import axios, {AxiosError} from "axios";
import {axiosInstance} from "../axios";

export function useCourseDetail(id: string | undefined) {
    const [course, setCourses] = useState<EducationCourse>()

    async function fetchCourse() {
        try {
            const response =
                await axiosInstance.get<EducationCourse>('api/v1/school/course/' + id + '/')
            setCourses(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCourse()
    }, [])
    return {course}
}