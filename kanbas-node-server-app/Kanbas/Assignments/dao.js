import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
    return updateAssignment(assignment);
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

//create and update assignment
export function updateAssignment(assignmentUpdates) {
    const { assignments } = Database;
    let assignment = assignments.find((assignment) => assignment._id === assignmentUpdates._id);
    if (assignment) {
        Object.assign(assignment, assignmentUpdates);
    } else {
        Database.assignments = [...assignments, assignmentUpdates];
    }
    return assignment;
}


