import {Route, Routes} from "react-router-dom";
import {CoursesPage} from "./pages/CoursesPage";
import {CategoryDetailPage} from "./pages/CategoryDetailPage";
// import {Navigation} from "./components/Navigation";
// import {MainPage} from "./pages/MainPage";
// import {CourseDetailPage} from "./pages/CourseDetailPage";
// import {UserCourses} from "./pages/UserCourses";
// import {CourseThemes} from "./pages/CourseThemes";
// import {ThemeTask} from "./pages/ThemeTask";
// import {TaskPage} from "./pages/TaskPage";
// import {Profile} from "./pages/Profile";

function App() {
    return (
        <>
            {/*<Navigation/>*/}
            <Routes>
                {<Route path="/courses" element={<CoursesPage/>}/>}
                <Route path="/category/:id" element={<CategoryDetailPage/>}/>
                {/*<Route path="/courses" element={<CoursesPage/>}/>*/}
                {/*<Route path="/" element={<MainPage/>}/>*/}
                {/*<Route path="/courses/:id" element={<CourseDetailPage/>}/>*/}
                {/*<Route path="/student/courses" element={<UserCourses/>}/>*/}
                {/*<Route path="/courses/:course_id/study" element={<CourseThemes/>}/>*/}
                {/*<Route path="/courses/:course_id/study/:theme_id" element={<ThemeTask/>}/>*/}
                {/*<Route path="/courses/:course_id/study/:theme_id/:task_id" element={<TaskPage/>}/>*/}
                {/*<Route path="/profile" element={<Profile/>}/>*/}
            </Routes>
        </>
    )
}

export default App;
