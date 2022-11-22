import {useEffect, useState} from "react";
import {EducationTheme} from "../models";
import {AxiosError} from "axios";
import {axiosInstance} from "../axios";

export function useThemes(id: string | undefined) {
    const [themes, setThemes] = useState<EducationTheme[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchThemes() {
        try {
            setError('')
            setLoading(true)

            const response =
                await axiosInstance.get<EducationTheme[]>('education/course/' + id + '/themes/')
            console.log(response)
            setThemes(response.data)
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchThemes()
    }, [])
    return {themes, error, loading}
}