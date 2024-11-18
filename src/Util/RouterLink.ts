export enum RouterLink {
    Home="/",
    DocumentFreePage="/document/free",
    DocumentPayPage="/document/pay",
    LessonNotPurchased = "/document/notbought/:id",
    CourseOffline="/course/offline",
    Exam="/exam",
    Profile="/profile",
    Setting="/setting",
    Chat="/chat",
    DetailCourseOffline="/course/offline/:id",
    DetailDocumentFreePage="/document/free/:id",
    DetailExamPage="/exam/:id",
    DetailLesson="/course/lesson/:id"
}
export enum RouterLinkAdmin {
    Home="",
    Account="account",
    Document="document",
    Certificate="certificate",
    Course="course",
    RegisteredCourse="registeredCourse",
    Teacher="teacher",
    Feedback="feedback"
}