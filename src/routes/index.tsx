import { NoticeList } from '../pages/notice';
import { BannerNoticeList } from '../pages/bannerNotice';
import MainPage from '../pages/main';

// route와 관련된 데이터
const routes = [
  {
    name: '메인',
    path: '/main',
    component: MainPage
  },
  {
    name: '공지사항',
    subMenus: [
      {
        path: '/notice',
        component: NoticeList,
        name: '일반공지'
      },
      {
        path: '/banner',
        component: BannerNoticeList,
        name: '배너공지'
      }
    ]
  }
];

export default routes;
