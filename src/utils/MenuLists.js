// 사이드바 메뉴 리스트

const MenuLists = [
  {
    name: '메인',
    path: '/main'
  },
  {
    name: '공지사항',
    subMenus: [
      {
        name: '일반공지',
        path: '/notice'
      },
      {
        name: '배너공지',
        path: '/banner'
      }
    ]
  }
];

export default MenuLists;
