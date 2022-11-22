import {EducationTheme} from "../models";
import {Link} from "react-router-dom";
import {LessonComponent} from "./LessonComponent";

interface ThemeWithTasksProps {
    course_id: string
    theme: EducationTheme
    selected_theme_id: number
}

export function ThemeWithLessons({course_id, theme, selected_theme_id}: ThemeWithTasksProps) {
    let styles = 'p-2 text-xl font-semibold text-gray-900 rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700 '
    if (selected_theme_id === theme.id) {
        styles += 'bg-purple-600'
    } else {
        styles += 'bg-blue-600'
    }
    return (
        <li>
            <div
                className={styles}>
                <span className="ml-1">{theme.title}</span>
            </div>
            <ul className="relative">
                {theme.lessons.map(lesson => <LessonComponent course_id={course_id} lesson={lesson} key={lesson.id}/>)}
            </ul>
        </li>
    )
}