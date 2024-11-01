import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments.map((assignment: any) => ({
        description: "This is the description",
        points: 100,
        dueDate: "2024-05-13",
        availableFrom: "2024-05-06",
        availableUntil: "2024-05-20",
        ...assignment
    })),
};
console.log(initialState);
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        deleteAssignment: (state, { payload: assignmentId }) => {
            console.log(assignmentId);
            state.assignments = state.assignments.filter(
                (assignment: any) => assignment._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((existingAssignment: any) =>
                existingAssignment._id === assignment._id ? assignment : existingAssignment
            );
            // if there's no assignment with the given id, add it
            if (!state.assignments.find((existingAssignment: any) => existingAssignment._id === assignment._id)) {
                state.assignments = [...state.assignments, assignment];
            }
        },
    },
});
export const { deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;

