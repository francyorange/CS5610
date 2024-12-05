import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { setEnrollments, enroll, unenroll } from "./reducer";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";


export default function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, fetchCourses, enrolling, setEnrolling, updateEnrollment }: {
    courses: any[]; course: any; setCourse: any;
    addNewCourse: any; deleteCourse: any;
    updateCourse: any; fetchCourses: any; enrolling: boolean; setEnrolling: (enrolling: boolean) => void; updateEnrollment: (courseId: string, enrolled: boolean) => void
  }) {
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enableEnrollments, setEnableEnrollments] = useState(false);
  // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  // const dispatch = useDispatch();
  const fetchAllCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllCourses();
  }, [currentUser]);
  const enrollCourse = async (courseId: string) => {
    await userClient.enrollUserInCourse(courseId);
    fetchCourses();
  };
  const unenrollCourse = async (courseId: string) => {
    await userClient.unenrollUserInCourse(courseId);
    fetchCourses();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />

      {/* <button className="btn btn-primary float-end" onClick={() => {
        setEnableEnrollments((prev) => !prev);
      }}>
        Enrollments
      </button> */}

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
          {(enableEnrollments ? allCourses : courses)
            .map((course) => {
              const isEnrolled = courses.some(
                (c) => c._id === course._id
              )

              const enrollmentActions = enableEnrollments ? (
                isEnrolled ? (
                  <button className="btn btn-danger float-end"
                    onClick={(event) => {
                      event.preventDefault();
                      unenrollCourse(course._id)
                    }}>
                    Unenroll
                  </button>
                ) : (
                  <button className="btn btn-success float-end"
                    onClick={(event) => {
                      event.preventDefault();
                      enrollCourse(course._id)
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
                          {enrolling && (
                            <button onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                              className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                              {course.enrolled ? "Unenroll" : "Enroll"}
                            </button>
                          )}
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
