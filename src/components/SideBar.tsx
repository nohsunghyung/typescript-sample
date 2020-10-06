import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Routes from "../routes/index";
import { withRouter, RouteComponentProps } from "react-router";

// state 타입 설정
interface Istate {
  activeIndex?: any;
  isActive?: boolean;
}

// props 타입 설정
interface Iprops {
  // id?: number;
  // path?: string;
  // component?: any;
  // name?: string;
  // parent?: string;
}

// history,location,match 사용을 위해 RouteComponentProps 사용
class SideBar extends Component<Iprops & RouteComponentProps, Istate> {
  constructor(props: Iprops & RouteComponentProps) {
    // props 옆에 interface props 지정
    super(props);
    // 메뉴 id 지정
    const replaceHash = this.props.location.hash.replace("#", "");
    const menuId = Number(replaceHash);

    this.state = {
      activeIndex: menuId || 0,
      isActive: false,
    };
  }
  // 메뉴 토글 핸들러
  handleMenuToggle = (index: number) => {
    this.setState({
      activeIndex: index,
    });
  };
  componentDidMount() {}
  render() {
    const { activeIndex } = this.state;
    return (
      <SideMenu>
        <ul>
          {Routes.map((menu: any, index: number) => {
            return (
              <MenuList
                key={menu.id}
                className={activeIndex === menu.id ? "active" : ""}
              >
                {/* 1뎁스 메뉴에 path가 있을경우 */}
                {menu.path ? (
                  <NavLink
                    to={{
                      pathname: `${menu.path}`,
                      hash: `${menu.id}`,
                    }}
                    className="depth depth01"
                  >
                    {menu.name}
                  </NavLink>
                ) : (
                  <Fragment>
                    {/* 1뎁스 메뉴에 path가 없을경우 */}
                    <button
                      type="button"
                      className={"depth depth01"}
                      onClick={() => this.handleMenuToggle(index)}
                    >
                      {menu.name}
                    </button>
                    <ul className={"sub-menu"}>
                      {menu.subMenu?.map((submenu: any, index: number) => {
                        return (
                          <li key={index}>
                            <NavLink
                              activeClassName={"active"}
                              to={{
                                pathname: `${submenu.path}`,
                                hash: `${menu.id}`,
                              }}
                              className={`depth02`}
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
