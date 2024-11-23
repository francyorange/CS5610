import { setAssignments, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect } from "react";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoCaretDown, IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router-dom";
export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);
    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    return (
        <div>
            <AssignmentsControls /><br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray ">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3 only-role-FACULTY" />
                        <IoCaretDown className="me-2" />
                        ASSIGNMENTS
                        <span className="badge rounded-pill text-dark bg-secondary border border-black ms-auto ">40% of Total</span>
                        <BsPlus className="fs-4 only-role-FACULTY" />
                        <IoEllipsisVertical className="fs-4 only-role-FACULTY" />
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0 ">
                        {assignments
                            .map((assignment: any) =>
                            (<li className="wd-lesson list-group-item ps-1">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="flex-shrink-0 ">
                                        <AssignmentControlButtons />
                                    </div>
                                    <div className="flex-grow-1 p-2">
                                        <a className="link-dark link-offset-2 link-underline-opacity-0" href={`/#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            <b>{assignment.title}</b></a><br />
                                        <b>Not available until</b> {new Date(new Date(assignment.availableFrom).setDate(new Date(assignment.availableFrom).getDate() - 1)).toISOString().split('T')[0]} 11:59 pm | <b>Due</b> {new Date(assignment.dueDate).toISOString().split('T')[0]} 11:59 pm | {assignment.points} pts
                                    </div>
                                    <div className="flex-shrink-0 only-role-FACULTY">
                                        <FaTrash className="text-danger me-2 mb-1" onClick={() => removeAssignment(assignment._id)} />
                                        <LessonControlButtons />
                                    </div>
                                </div>
                            </li>))}
                    </ul>
                </li>
            </ul >
        </div >
    );
}

