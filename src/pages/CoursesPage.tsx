import {useCourses} from "../hooks/courses";
import {Course} from "../components/Course";
import {CategoriesSidebar} from "../components/CategoriesSidebar";

export function CoursesPage() {
    const {courses} = useCourses()
    return (
        <div>
            <CategoriesSidebar/>
            <div className="container">
                {courses.map(course => <Course course={course} key={course.id}/>)}
            </div>
        </div>
    )
}