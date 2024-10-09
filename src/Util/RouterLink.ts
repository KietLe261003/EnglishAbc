export enum RouterLink {
    Home="/",
    DocumentFreePage="/document/free",
    DocumentPayPage="/document/pay",
    CourseOffline="/course/offline",
    Exam="/exam",
    Profile="/profile",
    Setting="/setting",
    Chat="/chat",
    DetailCourseOffline="/course/offline/:id",
    DetailDocumentFreePage="/document/free/:id",
    DetailDocumentPayPage="/document/pay/:id",
    DetailExamPage="/exam/:id"
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