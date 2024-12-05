import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });

}

export function createAssignment(assignment) {
    delete assignment._id
    return model.create(assignment)
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}

//create and update assignment
export function updateAssignment(assignmentUpdates) {
    return model.updateOne({ _id: assignmentUpdates._id }, assignmentUpdates, { upsert: true });
}


