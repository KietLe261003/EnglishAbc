import CourseOfflinePage from "../Page/ClientPage/CourseOfflinePage/CourseOfflinePage";
import DetailCourseOfflinePage from "../Page/ClientPage/CourseOfflinePage/DetailCourseOfflinePage";
import DetailLessonCourse from "../Page/ClientPage/CourseOfflinePage/DetailLessonCourse";
import Detaidocumentfreepage from "../Page/ClientPage/DocumentFreePage/Detaildocumentfreepage";
import DocumentFreePage from "../Page/ClientPage/DocumentFreePage/DocumentFreePage";
import DocumentPayPage from "../Page/ClientPage/DocumentPayPage/DocumentPayPage";
import LessonNotPurchased from "../Page/ClientPage/DocumentPayPage/LessonNotPurchased";
import ExamsDetail from "../Page/ClientPage/ExamsPage/ExamsDetail";
import ExamsPage from "../Page/ClientPage/ExamsPage/ExamsPage";
import HomePage from "../Page/ClientPage/HomePage/HomePage";
import ProfilePage from "../Page/ClientPage/ProfilePage/ProfilePage";
import { RouterLink } from "../Util/RouterLink";
import PayPage from "../Page/ClientPage/PayPage/PayPage";

const homeRoute = [
    {
        path: RouterLink.Home,
        element: HomePage
    },
    {
        path: RouterLink.DocumentFreePage,
        element: DocumentFreePage
    },
    {
        path: RouterLink.DocumentPayPage,
        element: DocumentPayPage
    },
    {
        path: RouterLink.LessonNotPurchased,
        element: LessonNotPurchased
    },
    {
        path: RouterLink.CourseOffline,
        element: CourseOfflinePage
    },
    {
        path: RouterLink.Exam,
        element: ExamsPage
    },
    {
        path: RouterLink.DetailCourseOffline,
        element: DetailCourseOfflinePage
    },
    {
        path: RouterLink.DetailDocumentFreePage,
        element: Detaidocumentfreepage
    },
    {
        path: RouterLink.DetailExamPage,
        element: ExamsDetail
    },
    {
        path: RouterLink.Profile,
        element: ProfilePage
    },
    {
        path: RouterLink.DetailLesson,
        element: DetailLessonCourse
    },
    {
        path: RouterLink.PayPage,
        element: PayPage
    },
]

export default homeRoute