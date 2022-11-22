import {useEffect, useState} from "react";
import {axiosInstance} from "../axios";
import {EducationLesson} from "../models";

export function useLesson(course_id: string | undefined, lesson_id?: string | undefined) {
    const [lesson, setLesson] = useState<EducationLesson>()

    async function fetchLesson() {
        let url = ''
        if (lesson_id) {
            url = lesson_id + '/'
        }
        try {
            const response =
                await axiosInstance.get<EducationLesson>('education/course/' + course_id + '/lesson/' + url)
            setLesson(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchLesson()
    }, [])
    return {lesson}
}