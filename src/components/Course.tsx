import {EducationCourse} from "../models";
import {Link} from "react-router-dom";

interface CourseProps {
    course: EducationCourse
}

export function Course({course}: CourseProps) {
    return (
        <div>
            <Link to={'/courses/' + course.id}>
                <div className="rounded overflow-hidden shadow-lg h-96 w-80 mb-5 mr-2">
                    <img className="h-52 w-52 ml-14 mx-auto" src={course.image}
                         alt="Sunset in the mountains"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <p className="whitespace-normal text-lg text-center">
                                {course.name}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {course.categories.slice(0, 4).map(category => <span className="inline-block bg-gray-200 rounded-full
                         px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category.name}</span>)}
                    </div>
                </div>
            </Link>
        </div>
    )
}