import { BsGripVertical, BsPlus } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoCaretDown, IoEllipsisVertical } from "react-icons/io5";
export default function Assignments() {
    return (
        <div>
            <AssignmentsControls /><br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray ">
                    <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <IoCaretDown className="me-2" />
                        ASSIGNMENTS
                        <span className="badge rounded-pill text-dark bg-secondary border border-black ms-auto ">40% of Total</span>
                        <BsPlus className="fs-4" />
                        <IoEllipsisVertical className="fs-4" />
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0">
                        <li className="wd-lesson list-group-item ps-1">
                            <div className="d-flex flex-row align-items-center">
                                <div className="flex-shrink-0 ">
                                    <AssignmentControlButtons />
                                </div>
                                <div className="flex-grow-1 p-2">
                                    <a className="link-dark link-offset-2 link-underline-opacity-0" href="#/Kanbas/Courses/1234/Assignments/123">
                                        <b>A1</b></a><br />
                                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am | <b>Due</b> May 13 at 11:59pm | 100 pts
                                </div>
                                <div className="flex-shrink-0">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item ps-1">
                            <div className="d-flex flex-row align-items-center">
                                <div className="flex-shrink-0 ">
                                    <AssignmentControlButtons />
                                </div>
                                <div className="flex-grow-1 p-2">
                                    <a className="link-dark link-offset-2 link-underline-opacity-0" href="#/Kanbas/Courses/1234/Assignments/123">
                                        <b>A2</b></a><br />
                                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00 am | <b>Due</b> May 20 at 11:59pm | 100 pts
                                </div>
                                <div className="flex-shrink-0">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>
                        <li className="wd-lesson list-group-item ps-1">
                            <div className="d-flex flex-row align-items-center">
                                <div className="flex-shrink-0 ">
                                    <AssignmentControlButtons />
                                </div>
                                <div className="flex-grow-1 p-2">
                                    <a className="link-dark link-offset-2 link-underline-opacity-0" href="#/Kanbas/Courses/1234/Assignments/123">
                                        <b>A3</b></a><br />
                                    <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00 am | <b>Due</b> May 27 at 11:59pm | 100 pts
                                </div>
                                <div className="flex-shrink-0">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

