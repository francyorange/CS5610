import { useLocation } from "react-router";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function KanbasNavigation() {
    const { pathname } = useLocation();
    return (
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a className="list-group-item border-0 text-center bg-black" href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
                <img src="/images/NEU.png" width="75px" /></a>
            <Link className={`list-group-item border-0 text-center ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`} to="/Kanbas/Account" id="wd-account-link">
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account</Link>
            <Link className={`list-group-item border-0 text-center ${pathname.includes("Dashboard") ? "bg-white text-danger" : "bg-black text-white"}`} to="/Kanbas/Dashboard" id="wd-dashboard-link">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard</Link>
            <Link className={`list-group-item border-0 text-center ${pathname.includes("Courses") ? "bg-white text-danger" : "bg-black text-white"}`} to="/Kanbas/Dashboard" id="wd-course-link">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses</Link>
            <Link className={`list-group-item border-0 text-center ${pathname.includes("Calendar") ? "bg-white text-danger" : "bg-black text-white"}`} to="/Kanbas/Calendar" id="wd-calendar-link">
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar</Link>
            <Link className={`list-group-item border-0 text-center ${pathname.includes("Inbox") ? "bg-white text-danger" : "bg-black text-white"}`} to="/Kanbas/Inbox" id="wd-inbox-link">
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox</Link>
            <Link className="list-group-item border-0 text-center bg-black text-white" to="/Labs" id="wd-labs-link">
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs</Link>
        </div >
    );
}

