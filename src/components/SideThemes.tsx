import {EducationTheme} from "../models";
import {CategoryList} from "./CategoryList";
import {ThemeWithLessons} from "./ThemeWithLessons";
import {useThemes} from "../hooks/themes";

interface SideThemesProps {
    course_id: string
    selected_theme_id: number
    selected_lesson_id: number
}

export function SideThemes({course_id, selected_theme_id, selected_lesson_id}: SideThemesProps) {
    const {themes} = useThemes(course_id)
    return (
        <aside className="w-1/4" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 ">
                <ul className="space-y-2">
                    {themes.map(theme => <ThemeWithLessons course_id={course_id} theme={theme}
                                                           selected_theme_id={selected_theme_id}
                                                           key={theme.id}/>)}
                </ul>
            </div>
        </aside>
    )
}