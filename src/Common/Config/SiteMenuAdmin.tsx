import { RouterLinkAdmin } from "../../Util/RouterLink";
import { IconDashboard, IconUserManager,IconCertificate, IconCourse, IconResgiterCourse, IconTeacherManager, IconFeedBack } from "../Icon/IconSlideBarAdmin";

export const siteMenuAdmin = [
    {
      content: 'Dashboard',
      icon: <IconDashboard/>,
      href: RouterLinkAdmin.Home,
    },
    {
      content: 'Accounts',
      icon: <IconUserManager/>,
      href: RouterLinkAdmin.Account,
    },
    {
      content: 'Certificate Managerment',
      icon: <IconCertificate/>,
      href: RouterLinkAdmin.Certificate,
    },
    {
      content: 'Course',
      icon: <IconCourse/>,
      href: RouterLinkAdmin.Course,
    },
    {
      content: 'ClassOffline',
      icon: <IconCourse/>,
      href: RouterLinkAdmin.ClassOffline,
    },
    {
      content: "Documents",
      icon: <IconCourse/>,
      href: RouterLinkAdmin.Document
    },
    {
      content: 'Registered Course',
      icon: <IconResgiterCourse/>,
      href: RouterLinkAdmin.RegisteredCourse,
    },
    {
      content: 'Teacher Managerment',
      icon: <IconTeacherManager/>,
      href: RouterLinkAdmin.Teacher,
    },
    {
      content: 'Feedback',
      icon: <IconFeedBack/>,
      href: RouterLinkAdmin.Feedback,
    },
  ];