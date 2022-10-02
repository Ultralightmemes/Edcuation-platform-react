import {useEffect, useState} from "react";
import {EducationCategory, EducationCourse} from "../models";
import {axiosInstance} from "../axios";

export function useCategories(){
    const [categories, setCategories] = useState<EducationCategory[]>([])

    async function fetchCourses() {
        try {

            const response =
                await axiosInstance.get<EducationCategory[]>('education/category/')
            console.log(response)
            setCategories(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCourses()
    }, [])
    return {categories}
}