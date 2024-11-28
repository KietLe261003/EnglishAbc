import { RouterLinkAdmin } from "../../Util/RouterLink";
import { IconDashboard, IconUserManager,IconCertificate, IconCourse, IconResgiterCourse, IconTeacherManager, IconFeedBack } from "../Icon/IconSlideBarAdmin";

export const siteMenuAdmin = [
    {
      content: 'Dashboard',
      icon: <IconDashboard/>,
      href: RouterLinkAdmin.Home,
      role: "admin"
    },
    {
      content: 'Accounts',
      icon: <IconUserManager/>,
      href: RouterLinkAdmin.Account,
      role: "admin"
    },
    {
      content: "Documents",
      icon: <IconCourse/>,
      href: RouterLinkAdmin.Document,
      role: "all"
    },
    {
      content: 'Certificate Managerment',
      icon: <IconCertificate/>,
      href: RouterLinkAdmin.Certificate,
      role: "admin"
    },
    {
      content: 'Course',
      icon: <IconCourse/>,
      href: RouterLinkAdmin.Course,
      role: "all"
    },
    {
      content: 'Registered Course',
      icon: <IconResgiterCourse/>,
      href: RouterLinkAdmin.RegisteredCourse,
      role: "admin"
    },
    {
      content: 'Teacher Managerment',
      icon: <IconTeacherManager/>,
      href: RouterLinkAdmin.Teacher,
      role: "admin"
    },
    {
      content: 'Feedback',
      icon: <IconFeedBack/>,
      href: RouterLinkAdmin.Feedback,
      role: "admin"
    },
  ];