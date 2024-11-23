import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router";
export default function ProtectedCourseRoute({ courses, children }: { courses: any, children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    console.log("ProtectedCourseRoute", currentUser._id, cid, enrollments);
    if (currentUser) {
        if (courses.find((c: any) => c._id === cid)) {
            console.log("ProtectedCourseRoute allow", currentUser, cid, enrollments);
            return children;
        } else {
            console.log("ProtectedCourseRoute disallow", currentUser, cid, enrollments);
            return <Navigate to="/Kanbas/Dashboard" />;
        }
    } else {
        return <Navigate to="/Kanbas/Account/Signin" />;
    }
}

