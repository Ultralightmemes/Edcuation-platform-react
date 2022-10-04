import {useEffect, useState} from "react";
import {EducationCourse} from "../models";
import axios, {AxiosError} from "axios";
import {axiosInstance} from "../axios";

export function useCourseDetail(id: string | undefined) {
    const [course, setCourses] = useState<EducationCourse>()

    async function fetchCourse() {
        try {
            const response =
                await axiosInstance.get<EducationCourse>('education/course/' + id + '/')
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

export function followCourse(id: string | undefined) {
    try {
        const response =
            axiosInstance.post('education/course/' + id + '/follow/'
            ).catch(function (error) {
                console.log(error)
                if (error.response.status === 401) {
                    // open()
                }
            })
        console.log(response)
    } catch (e) {
        const error = e as AxiosError
    }
}