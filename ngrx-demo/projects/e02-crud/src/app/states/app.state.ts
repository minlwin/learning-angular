import { createAction, createReducer, on, props } from "@ngrx/store"

export interface Student {
    readonly id: number
    readonly name: string
    readonly phone: string
    readonly email: string
}

export function newStudent(): Student {
    return {
        id: 0,
        name: '',
        phone: '',
        email: ''
    }
}

export interface StudentState {
    readonly students: ReadonlyArray<Student>
    readonly editor: {
        readonly target: Student,
        readonly generatedId: number
    }
}

export const editAction = createAction("[Students] edit", props<Student>())
export const saveAction = createAction('[Students] save', props<Student>())
export const removeAction = createAction('[Students] remove', props<{ id: number }>())

const editFunction = (state: StudentState, student: Student) => {
    return { ...state, editor: { ...state.editor, target: student } }
}

const saveFunction = (state: StudentState, student: Student) => {
    const nextEditor = { target: newStudent(), generatedId: state.editor.generatedId + 1 }
    if (student.id) {
        const students = [...state.students]
        students[state.students.findIndex(a => a.id === student.id)] = { ...student }
        return { students: students, editor: nextEditor }
    }
    return { students: [...state.students, { ...student, id: state.editor.generatedId }], editor: nextEditor }
}

const removeFunction = (state: StudentState, student: { id: number }) => {
    return { ...state, students: state.students.filter(a => a.id !== student.id) }
}

const initialState: StudentState = {
    students: [],
    editor: {
        generatedId: 1,
        target: newStudent()
    }
}

export function reduceAppState(state: any, action: any) {
    return createReducer(
        initialState,
        on(editAction, editFunction),
        on(saveAction, saveFunction),
        on(removeAction, removeFunction)
    )(state, action)
}

export const selectStudents = (state: { studentModel: StudentState }) => state.studentModel.students
export const selectEditData = (state: { studentModel: StudentState }) => state.studentModel.editor.target
