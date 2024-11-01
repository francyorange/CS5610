import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { enroll, unenroll } from "./reducer";
export default function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: any;
    addNewCourse: any; deleteCourse: any;
    updateCourse: any;
  }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enableEnrollments, setEnableEnrollments] = useState(false);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <button className="btn btn-primary float-end only-role-STUDENT" onClick={() => {
        setEnableEnrollments((prev) => !prev);
      }}>
        Enrollments
      </button>

      <div className="only-role-FACULTY">
        <h5>New Course
          <button className="btn btn-primary float-end "
            id="wd-add-new-course-click"
            onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2 "
            onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5><br />
        <input value={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <textarea value={course.description} className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })} />

      </div>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) =>
              enrollments.some(
                (enrollment: { user: any; course: any; }) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              ) || enableEnrollments)
            .map((course) => {
              const isEnrolled = enrollments.some(
                (enrollment: { user: any; course: any; }) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              );

              const enrollmentActions = enableEnrollments ? (
                isEnrolled ? (
                  <button className="btn btn-danger float-end"
                    onClick={(event) => {
                      console.log("unenroll onclick")
                      event.preventDefault();
                      dispatch(unenroll({ studentId: currentUser._id, courseId: course._id }))
                    }}>
                    Unenroll
                  </button>
                ) : (
                  <button className="btn btn-success float-end"
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(enroll({ studentId: currentUser._id, courseId: course._id }))
                    }}>
                    Enroll
                  </button>
                )) : ""

              return (

                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src="/images/reactjs.png" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>


                        <button className="btn btn-primary"> Go </button>
                        {enrollmentActions}

                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end only-role-FACULTY"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end only-role-FACULTY" >
                          Edit
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
        </div>
      </div >
    </div >
  );
}
