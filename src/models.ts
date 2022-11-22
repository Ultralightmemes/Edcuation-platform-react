import TestOptions from "node:test";

export interface EducationCourse {
    id: number,
    name: string,
    text: string,
    publish_date: string,
    update_date: string,
    is_published: boolean,
    image: string,
    categories: EducationCategory[],
    themes: EducationTheme[],
    percents: number
}

export interface EducationCategory {
    id: number,
    name: string,
}

export interface EducationTheme {
    id: number,
    title: string,
    theme_description: string,
    lessons: EducationLesson[]
}

export interface EducationTask {
    id: number,
    title: string,
    position: number,
    text: string,
    classname: string
    options: EducationOption[],
    radio: boolean,
}

export interface EducationLesson {
    id: number,
    exercises: EducationTask[],
    tests: EducationTask[],
    next_lesson: string,
    previous_lesson: string,
    title: string,
    video: string,
    update_date: string,
    text: string,
    theme: number,
    position: number,
    classname: string
}

export interface EducationExercise {
    id: number,
    title: string,
    position: number,
    text: string,
    classname: string
}

export interface EducationTest {
    id: number,
    title: string,
    position: number,
    text: string,
    classname: string
}

export interface EducationOption {
    id: number
    text: string
}

export interface ExerciseAnswer {
    id: string
    answer: string
}

export interface TestAnswer {
    id: string
    answers: string[]
}

export interface User {
    email: string,
    first_name: string,
    last_name: string,
    patronymic: string,
    image: string,
    is_staff: boolean
}