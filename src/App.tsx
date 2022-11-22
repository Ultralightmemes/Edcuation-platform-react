import {Route, Routes} from "react-router-dom";
import {CoursesPage} from "./pages/CoursesPage";
import {CategoryDetailPage} from "./pages/CategoryDetailPage";
import {CourseDetailPage} from "./pages/CourseDetailPage";
import {Navigation} from "./components/Navigation";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {Profile} from "./pages/Profile";
import {UserCourses} from "./pages/UserCourses";
import {Lesson} from "./pages/Lesson";
// import {MainPage} from "./pages/MainPage";
// import {CourseThemes} from "./pages/CourseThemes";
// import {ThemeTask} from "./pages/ThemeTask";
// import {TaskPage} from "./pages/TaskPage";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/courses" element={<CoursesPage/>}/>
                {/*<Route path="/courses" element={<CoursesPage/>}/>*/}
                <Route path="/category/:id" element={<CategoryDetailPage/>}/>
                <Route path="/courses/:id" element={<CourseDetailPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegistrationPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/student/courses" element={<UserCourses/>}/>
                <Route path="/courses/:course_id/lesson" element={<Lesson/>}/>
                <Route path="/courses/:course_id/lesson/:lesson_id" element={<Lesson/>}/>
            </Routes>
        </>
    )
}

export default App;
