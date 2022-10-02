import {useParams} from "react-router-dom";
import {useCourses} from "../hooks/courses";
import {Course} from "../components/Course";
import {CategoriesSidebar} from "../components/CategoriesSidebar";

type CategoryDetailPageParams = {
    id: string
}

export function CategoryDetailPage(){
    const {id} = useParams<CategoryDetailPageParams>()
    const {courses} = useCourses(id)
    return(
        <div className="flex mx-auto max-w-screen-xl pt-5 ml-6">
            <CategoriesSidebar id={id}/>
            <div className="container">
                {courses.map(course => <Course course={course} key={course.id}/>)}
            </div>
        </div>
    )
}