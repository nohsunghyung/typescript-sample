import { NoticeList } from "../pages/notice";
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
      },
      {
        id: 1,
        path: "/banner",
        component: NoticeList,
        name: "배너공지",
      },
    ],
  },
];

export default routes;
