import { RouterLink } from '../../Util/RouterLink';
import { IconChat, IconSetting } from '../Icon/Icon';
import {
  // IconBook,
  IconDocument,
  IconHome,
  IconLeaf,
  IconUser,
  IconVideo,
} from '../Icon/IconSlideBar';
export const siteMenu = [
  {
    name: 'Trang chủ',
    href: RouterLink.Home,
    icon: <IconHome />,
  },
  {
    name: 'Tài liệu ',
    href: RouterLink.DocumentFreePage,
    icon: <IconLeaf />,
  },
  // {
  //   name: 'Tài liệu trả phí',
  //   href: RouterLink.DocumentPayPage,
  //   icon: <IconBook />,
  // },
  {
    name: 'Khóa học',
    href: RouterLink.CourseOffline,
    icon: <IconVideo />,
  },
  {
    name: 'Bài kiểm tra',
    href: RouterLink.Exam,
    icon: <IconDocument />,
  },
  {
    name: 'Quản lý trang cá nhân',
    href: RouterLink.Profile,
    icon: <IconUser />,
  },
];
export const additionalItems = [
  {
    name: 'Chat',
    href: RouterLink.Chat,
    icon: <IconChat />,
  },
  {
    name: 'Cài đặt',
    href: RouterLink.Setting,
    icon: <IconSetting />,
  },
];

