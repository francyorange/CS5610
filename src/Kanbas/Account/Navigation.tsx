import { Link } from "react-router-dom";
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 d-none d-md-block">
            <Link
                id="wd-sign-in-link"
                className="list-group-item active border-0"
                to="/Kanbas/Account/Signin">
                Signin
            </Link>
            <Link
                id="wd-course-sign-up-link"
                className="list-group-item border border-0 text-danger"
                to="/Kanbas/Account/Signup">
                Signup
            </Link>
            <Link
                id="wd-course-profile-link"
                className="list-group-item border border-0 text-danger"
                to="/Kanbas/Account/Profile">
                Profile
            </Link>
        </div>
    );
}
