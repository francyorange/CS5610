import { updateAssignment } from "./reducer";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
// import * as db from "../../Database";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function AssignmentEditor() {
    // const { assignments } = db;
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const assignment = assignments.find(
        (assignment: { _id: string | undefined; course: string | undefined; }) =>
            assignment._id === aid
            && assignment.course === cid) || {
        _id: new Date().getTime().toString(),
        title: "New Assignment",
        description: "New Assignment Description",
        points: 100,
        dueDate: "2024-05-13",
        availableFrom: "2024-05-06",
        availableUntil: "2024-05-20",
        course: cid,
    };

    const [title, setTitle] = useState(assignment.title);
    const [description, setDescription] = useState(assignment.description);
    const [points, setPoints] = useState(assignment.points);
    const [dueDate, setDueDate] = useState(assignment.dueDate);
    const [availableFrom, setAvailableFrom] = useState(assignment.availableFrom);
    const [availableUntil, setAvailableUntil] = useState(assignment.availableUntil);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const updatedAssignment = {
            _id: assignment._id,
            title,
            description,
            points,
            dueDate,
            availableFrom,
            availableUntil,
            course: assignment.course
        };

        dispatch(updateAssignment(updatedAssignment));
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <>
            <div id="wd-assignments-editor">
                <form>
                    <div className="mb-3">
                        <label htmlFor="wd-name" className="form-label">
                            Assignment Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="wd-name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            id="wd-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}>
                        </textarea>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2">
                            <label htmlFor="wd-points" className="col-form-label">
                                Points
                            </label>
                        </div>
                        <div className="col-10">
                            <input
                                type="number"
                                className="form-control"
                                id="wd-points"
                                value={points}
                                onChange={(e) => setPoints(Number(e.target.value))}
                                min="0"
                                max="100"
                                step="0.1" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2">
                            <label htmlFor="wd-group" className="col-form-label">
                                Assignment Group
                            </label>
                        </div>
                        <div className="col-10">
                            <select className="form-select" id="wd-group">
                                <option selected>ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2">
                            <label htmlFor="wd-display-grade-as" className="col-form-label">
                                Display Grade as
                            </label>
                        </div>
                        <div className="col-10">
                            <select className="form-select" id="wd-display-grade-as">
                                <option selected>Percentage</option>
                            </select>
                        </div>
                    </div>

                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-2 pt-0">Submission Type</legend>
                        <div className="col-10">
                            <select className="form-select mb-3" id="wd-submission-type">
                                <option selected>Online</option>
                            </select>

                            <label className="fw-bold mb-2">Online Entry Options:</label>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-text-entry" value="option1" />
                                <label className="form-check-label" htmlFor="wd-text-entry">
                                    Text Entry
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-website-url" value="option2" />
                                <label className="form-check-label" htmlFor="wd-website-url">
                                    Website URL
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-media-recordings" value="option3" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">
                                    Media Recordings
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-student-annotation" value="option4" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">
                                    Student Annotation
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-file-upload" value="option5" />
                                <label className="form-check-label" htmlFor="wd-file-upload">
                                    File Uploads
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-2 pt-0">Assign</legend>

                        <div className="col-10">
                            <label htmlFor="wd-assign-to" className="fw-bold mb-2">Assign to</label>
                            <input type="text" className="form-control mb-3" id="wd-assign-to" value="Everyone" />

                            <label htmlFor="wd-due-date" className="fw-bold mb-2">Due</label>
                            <input
                                type="date"
                                className="form-control mb-3"
                                id="wd-due-date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />

                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="wd-available-from" className="fw-bold mb-2">Available from</label>
                                    <input
                                        type="date"
                                        className="form-control mb-3"
                                        id="wd-available-from"
                                        value={availableFrom}
                                        onChange={(e) => setAvailableFrom(e.target.value)}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="wd-available-until" className="fw-bold mb-2">Until</label>
                                    <input
                                        type="date"
                                        className="form-control mb-3"
                                        id="wd-available-until"
                                        value={availableUntil}
                                        onChange={(e) => setAvailableUntil(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Link
                            to={`/Kanbas/Courses/${cid}/Assignments`}>
                            <button type="button" className="btn btn-secondary me-2">Cancel</button>
                        </Link>
                        <button type="button" className="btn btn-danger only-role-FACULTY" onClick={handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        </>
    );
}








