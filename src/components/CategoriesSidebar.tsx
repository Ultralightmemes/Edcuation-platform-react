import {EducationCategory} from "../models";
import {CategoryList} from "./CategoryList";
import {useCategories} from "../hooks/categories";

interface CategoriesSidebarProps {
    id?: string
}

export function CategoriesSidebar({id}: CategoriesSidebarProps ) {
    const {categories} = useCategories()
    return (
        <aside className="w-80" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    {categories.map(category => <CategoryList category={category} key={category.id} id={id}/>)}
                </ul>
            </div>
        </aside>
    )
}