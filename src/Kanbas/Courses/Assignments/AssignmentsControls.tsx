import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


export default function AssignmentsControls() {
    const { cid } = useParams();
    const navigate = useNavigate();
    return (
        <div id="wd-assignments-controls" className="text-nowrap only-role-FACULTY">
            <button
                id="wd-add-assignment-btn"
                className="btn btn-lg btn-danger me-1 float-end rounded-1 "
                onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/NewAssignment`)}
            >
                <FaPlus className="position-relative me-2 " style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end rounded-1">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>
            <div className="input-group input-group-lg" style={{ width: "300px" }}>
                <span className="input-group-text btn-secondary rounded-1 border-end-0"><FaSearch /></span>
                <input id="wd-search-assignment" className="form-control rounded-1 border-start-0" placeholder="Search..." />
            </div>
        </div>
    );
}
