import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MenuLists from 'utils/MenuLists';
import { withRouter, RouteComponentProps } from 'react-router';

// state 타입 설정
interface Istate {
  activeMenuName: string;
}

// props 타입 설정
interface Iprops {
  // id?: number;
  // path?: string;
  // component?: any;
  // name?: string;
  // parent?: string;
}

// 메뉴 활성화 함수
function activeMenuHandler(pathname: string) {
  let activeMenuName = '';
  if (!activeMenuName) {
    MenuLists.forEach((menu: any) => {
      let subMenus = menu.subMenus;
      if (subMenus) {
        // 서브메뉴가 있을경우
        subMenus.forEach((submenu: any) => {
          if (submenu.path === pathname) {
            // 서브메뉴의 path와 location path가 일치할경우
            activeMenuName = menu.name;
          }
        });
      } else {
        activeMenuName = menu.name;
      }
    });
  }
  return activeMenuName;
}

// history,location,match 사용을 위해 RouteComponentProps 사용
class SideBar extends Component<Iprops & RouteComponentProps, Istate> {
  constructor(props: Iprops & RouteComponentProps) {
    // props 옆에 interface props 지정
    super(props);
    // 현재 pathname
    const pathName = this.props.location.pathname;
    this.state = {
      activeMenuName: activeMenuHandler(pathName) || ''
    };
  }

  // 메뉴 토글 핸들러
  handleMenuToggle = (menuName: string) => {
    // 현재 메뉴와 클릭한 메뉴가 같을경우
    if (this.state.activeMenuName === menuName) menuName = '';
    this.setState({
      activeMenuName: menuName
    });
  };

  componentDidMount() {}
  render() {
    const { activeMenuName } = this.state;
    return (
      <SideMenu>
        <ul>
          {MenuLists.map((menu: any, index: number) => {
            return (
              <MenuList
                key={index}
                className={activeMenuName === menu.name ? 'active' : ''}
              >
                {/* 1뎁스 메뉴에 path가 있을경우 */}
                {menu.path ? (
                  <NavLink
                    to={{
                      pathname: `${menu.path}`
                    }}
                    className={'depth depth01'}
                    replace
                  >
                    {menu.name}
                  </NavLink>
                ) : (
                  <Fragment>
                    {/* 1뎁스 메뉴에 path가 없을경우 */}
                    <button
                      type="button"
                      className={'depth depth01'}
                      onClick={() => this.handleMenuToggle(menu.name)}
                    >
                      {menu.name}
                    </button>
                    <ul className={'sub-menu'}>
                      {menu.subMenus?.map((submenu: any, index: number) => {
                        return (
                          <li key={index}>
                            <NavLink
                              to={{
                                pathname: `${submenu.path}`
                              }}
                              className={`depth02`}
                              replace
                            >
                              {submenu.name}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </Fragment>
                )}
              </MenuList>
            );
          })}
        </ul>
      </SideMenu>
    );
  }
}

const SideMenu = styled.aside`
  position: fixed;
  top: 100px;
  left: 0;
`;

const MenuList = styled.li`
  &.active {
    > .depth {
      color: pink;
    }
    > .sub-menu {
      display: block;
    }
  }
  .depth01 {
    display: block;
    padding: 10px 10px 10px 20px;
    border: 0;
    background: none;
    font-size: 14px;
    &.active {
      color: pink;
    }
  }
  .sub-menu {
    display: none;
    &.active {
      display: block;
    }
  }
  .depth02.active {
    color: pink;
  }
`;

export default withRouter(SideBar);
