import { useParams } from "react-router";
import { Link } from "react-router-dom";

import * as db from "../../Database";
export default function AssignmentEditor() {
    const { assignments } = db;
    const { cid, aid } = useParams();
    const assignment = assignments.find(
        (assignment) =>
            assignment._id === aid
            && assignment.course === cid);

    return (
        <>
            <div id="wd-assignments-editor">
                <form>
                    <div className="mb-3">
                        <label htmlFor="wd-name" className="form-label">
                            Assignment Name
                        </label>
                        <input type="text" className="form-control" id="wd-name" placeholder={`${assignment && assignment.title}`} />
                    </div>

                    <div className="mb-3">
                        <textarea className="form-control" id="wd-description" placeholder="The assignment is available online Submit a link to the landing page of" rows={3}></textarea>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2">
                            <label htmlFor="wd-points" className="col-form-label">
                                Points
                            </label>
                        </div>
                        <div className="col-10">
                            <input type="number" className="form-control" id="wd-points" placeholder="100" min="0" max="100" step="0.1" />
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
                            <input type="date" className="form-control mb-3" id="wd-due-date" value="2024-05-13" />

                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="wd-available-from" className="fw-bold mb-2">Available from</label>
                                    <input type="date" className="form-control mb-3" id="wd-available-from" value="2024-05-06" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="wd-available-until" className="fw-bold mb-2">Until</label>
                                    <input type="date" className="form-control mb-3" id="wd-available-until" value="2024-05-20" />
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
                        <Link
                            to={`/Kanbas/Courses/${cid}/Assignments`}>
                            <button type="submit" className="btn btn-danger">Save</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}








