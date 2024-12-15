import ManagementAccount from "../Page/AdminPage/Account/Index";
import ManagementCertificate from "../Page/AdminPage/Certificate/Index";
import ManagementDocument from "../Page/AdminPage/Document/Document";
import ManagementFeedBack from "../Page/AdminPage/FeedBack/Index";
import HomePageAdmin from "../Page/AdminPage/HomePage/HomePageAdmin";
import ListAndRemoveCourseAdmin from "../Page/AdminPage/Course/ListAndRemoveCourseAdmin";
import ManagementResgiteredCourse from "../Page/AdminPage/RegisteredCourse/Index";
import ManagementTeacher from "../Page/AdminPage/Teacher/Index";
import { RouterLinkAdmin } from "../Util/RouterLink";
import CourseDetailPage from "../Page/AdminPage/EditCourse/CourseDetailPage";
import ClassOffline from "../Page/AdminPage/ClassOffline/Index";
export const adminRoute=[
    {
        path: RouterLinkAdmin.Home,
        element: HomePageAdmin,
        role: "admin"
    },
    {
        path: RouterLinkAdmin.Account,
        element: ManagementAccount,
        role: "admin"
    },
    {
        path: RouterLinkAdmin.Course,
        element: ListAndRemoveCourseAdmin,
        role: "all"
    },
    {
        path: RouterLinkAdmin.Document,
        element: ManagementDocument,
        role: "all"
    },
    {
        path: RouterLinkAdmin.Certificate,
        element: ManagementCertificate,
        role: "admin"
    },
    {
        path: RouterLinkAdmin.RegisteredCourse,
        element: ManagementResgiteredCourse,
        role: "admin"
    },
    {
        path: RouterLinkAdmin.Teacher,
        element: ManagementTeacher,
        role: "admin"
    },
    {
        path: RouterLinkAdmin.Feedback,
        element: ManagementFeedBack,
        role: "admin"
    },
    {
        path: RouterLinkAdmin.CourseDetail,
        element: CourseDetailPage,
        role: "all"
    },
    {
        path: RouterLinkAdmin.ClassOffline,
        element: ClassOffline
    }
]