import { NoticeList } from "../pages/notice";
import { BannerNoticeList } from "../pages/bannerNotice";
import MainPage from "../pages/main";

// route와 관련된 데이터
const routes = [
  {
    id: 0,
    path: "/main",
    component: MainPage,
    name: "메인",
  },
  {
    id: 1,
    name: "공지사항",
    subMenu: [
      {
        id: 0,
        path: "/notice",
        component: NoticeList,
        name: "일반공지",
        parent: "공지사항",
      },
      {
        id: 1,
        path: "/banner",
        component: BannerNoticeList,
        name: "배너공지",
        parent: "공지사항",
      },
    ],
  },
  {
    id: 2,
    name: "가스요금",
    subMenu: [
      {
        id: 0,
        path: "/ff",
        component: MainPage,
        name: "일반가스",
        parent: "가스요금",
      },
      {
        id: 1,
        path: "/aa",
        component: MainPage,
        name: "배너가스",
        parent: "가스요금",
      },
    ],
  },
];

export default routes;
