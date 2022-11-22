import {EducationLesson, EducationTask} from "../models";
import {Link} from "react-router-dom";

interface LessonProps {
    course_id: string
    lesson: EducationLesson
}

export function LessonComponent({course_id, lesson}: LessonProps) {
    let styles = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
    // if (lesson.task_succeed) {
    //     styles += "bg-green-400 hover:bg-green-600 dark:hover:bg-green-700"
    // } else if (lesson.task_send) {
    //     styles += "bg-green-200 hover:bg-green-400 dark:hover:bg-green-700"
    // }
    // else {
    //     styles += "hover:bg-gray-100 dark:hover:bg-gray-700"
    // }
    return (
        <li>
            <Link to={'/courses/' + course_id + '/lesson/' + lesson.id} reloadDocument={true}>
                <div
                    className={styles}>
                    <span className="ml-3">{lesson.title}</span>
                </div>
            </Link>
        </li>
    )
}