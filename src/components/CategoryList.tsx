import {EducationCategory} from "../models";
import {Link} from "react-router-dom";

interface CategoryListProps {
    category: EducationCategory
    id?: string
}

export function CategoryList({category, id}: CategoryListProps) {
    let classname = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white"
    if (id === String(category.id))
        classname += " bg-amber-200 hover:bg-amber-400 dark:hover:bg-amber-700"
    else
        classname += "hover:bg-gray-100 dark:hover:bg-gray-700"
    return (
        <li>
            <Link to={'/category/' + category.id} reloadDocument={true}>
                <div
                    className={classname}>
                    <span className="ml-3">{category.name}</span>
                </div>
            </Link>
        </li>
    )
}