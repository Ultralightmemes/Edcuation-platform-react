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
    theme_name: string,
    theme_description: string,
    task: EducationTask[]
}

export interface EducationTask {
    id: number,
    task_name: string,
    task_header: string,
    task_info: string,
    teacher_file: string,
    task_succeed: boolean,
    task_send: boolean,
}

export interface PaginationTask {
    count: number
    next: string
    previous: string
    results: EducationTask[]
}

export interface Student {
    email: string,
    first_name: string,
    last_name: string,
    image: string,
    date_joined: string,
    is_superuser: boolean
}