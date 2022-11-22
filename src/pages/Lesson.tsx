import {Link, useParams} from "react-router-dom";
import {SideThemes} from "../components/SideThemes";
import React from "react";
import {useLesson} from "../hooks/lesson";
import ReactPlayer from "react-player";
import {Task} from "../components/Task";
import {ExerciseAnswer, TestAnswer} from "../models";
import {axiosInstance} from "../axios";

export function Lesson() {
    const {course_id, lesson_id} = useParams()
    const {lesson} = useLesson(course_id, lesson_id)

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        let exercises: ExerciseAnswer[] = []
        let raw_exercises = document.getElementsByClassName('ExerciseTask')
        const emptyExercise = (): ExerciseAnswer => ({
            id: '',
            answer: '',
        });
        for (let i = 0; i < raw_exercises.length; i++) {
            let exercise = emptyExercise()
            exercise.id = raw_exercises[i].id
            exercise.answer = (raw_exercises[i] as HTMLInputElement).value
            exercises.push(exercise)
        }
        // console.log(exercises)
        let tests: TestAnswer[] = []
        let raw_tests = document.getElementsByClassName('TestTask')
        const emptyTests = (): TestAnswer => ({
            id: '',
            answers: [],
        });
        for (let i = 0; i < raw_tests.length; i++) {
            let test = emptyTests()
            test.id = raw_tests[i].id
            let options = raw_tests[i].getElementsByTagName("input")
            for (let k = 0; k < options.length; k++) {
                if ((options[k] as HTMLInputElement).checked) {
                    test.answers.push(options[k].id)
                }
            }
            tests.push(test)
        }
        console.log(tests)
        let response = axiosInstance.post('education/course/' + course_id + '/lesson/' + lesson?.id + '/answer/',
            {
                lesson: lesson?.id,
                exercises: exercises,
                tests: tests
            })
    }

    return (
        <div className="flex">
            <div className="mr-6 w-3/4">
                {lesson?.previous_lesson &&
                    <Link to={'/courses/' + course_id + '/lesson/' + lesson.previous_lesson} reloadDocument={true}>
                        <button className="fixed bg-blue-600 w-7 h-14 top-1/2 -mt-10 z-10"></button>
                    </Link>}
                {lesson?.next_lesson &&
                    <Link to={'/courses/' + course_id + '/lesson/' + lesson.next_lesson} reloadDocument={true}>
                        <button className="fixed -ml-4 left-3/4 bg-blue-600 w-7 h-14 top-1/2 -mt-10 z-10">
                        </button>
                    </Link>}
                <div className="ml-44 -mt-11">
                    <h1 className="text-3xl">{lesson?.title}</h1>
                </div>
                {lesson?.video && <div className="inline z-0">
                    <ReactPlayer className="mt-2" width="1150px" height="647px" url={lesson?.video} controls={true}
                                 config={{file: {attributes: {controlsList: 'nodownload'}}}}
                    />
                </div>}
                <p className="text-justify text-xl mt-3 -ml-6 indent-12 mx-auto text-center">
                    {lesson?.text}
                </p>
                <div>
                    <form onSubmit={formSubmitHandler}>
                        {lesson?.exercises.concat(lesson?.tests).map(task => <Task task={task} key={task.id}/>)}
                        <div className="right-1/4 mr-6 absolute">
                            <button
                                className="mt-2 p-2 text-xl border-2 border-white bg-blue-600 rounded-lg"
                                type="submit">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SideThemes course_id={course_id!} selected_lesson_id={lesson?.id!} selected_theme_id={lesson?.theme!}/>
        </div>
    )
}