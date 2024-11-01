import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState: {
        enrollments: enrollments,
    },
    reducers: {
        enroll: (state, { payload: enrollment }) => {
            console.log("enroll reducer")
            console.log(enrollment)
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                studentId: enrollment.studentId,
                courseId: enrollment.courseId,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
            // console.log the length
            console.log(state.enrollments.length)
            console.log(state.enrollments)
        },
        unenroll: (state, { payload: { studentId, courseId } }) => {
            console.log("unenroll reducer")
            console.log(studentId)
            state.enrollments = state.enrollments.filter(
                (e: any) => e.studentId !== studentId || e.courseId !== courseId
            );
            // console.log the length
            console.log(state.enrollments.length)
            console.log(state.enrollments)
        },
    },
});
export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;