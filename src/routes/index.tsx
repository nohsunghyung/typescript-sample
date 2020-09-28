import { NoticeList } from "../pages/notice";
import MainPage from "../pages/main";

// route와 관련된 데이터
const routes = [
  {
    path: "/notice",
    component: NoticeList,
  },
  {
    path: "/main",
    component: MainPage,
  },
];

export default routes;
