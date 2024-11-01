import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState: {
        enrollments: enrollments
    },
    reducers: {
        enroll: (state, { payload: enrollment }) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        unenroll: (state, { payload: { user, course } }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e.user !== user || e.course !== course
            );
        },
    },
});
export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;