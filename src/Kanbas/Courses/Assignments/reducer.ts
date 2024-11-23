import { createSlice } from "@reduxjs/toolkit";
const initialState: { assignments: any[] } = {
    assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },

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
export const { setAssignments, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;

