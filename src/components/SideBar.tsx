import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Routes from "../routes/index";
import { withRouter, RouteComponentProps } from "react-router";

// state 타입 설정
interface Istate {
  isMenuActive?: boolean;
}

// props 타입 설정
interface Iprops {}

// history,location,match 사용을 위해 RouteComponentProps 사용
class SideBar extends Component<Iprops & RouteComponentProps, Istate> {
  state: Istate = {
    isMenuActive: false,
  };
  // 메뉴 토글 핸들러
  handleMenuToggle = () => {
    this.setState({
      isMenuActive: !this.state.isMenuActive,
    });
  };
  componentDidMount() {
    const pathName = this.props.location.pathname;
  }
  render() {
    return (
      <SideMenu>
        <ul>
          {Routes.map((menu) => {
            return (
              <MenuList key={menu.id}>
                {/* 1뎁스 메뉴에 path가 있을경우 */}
                {menu.path ? (
                  <NavLink to={menu.path} className="depth01">
                    {menu.name}
                  </NavLink>
                ) : (
                  <Fragment>
                    {/* 1뎁스 메뉴에 path가 없을경우 */}
                    <button
                      type="button"
                      className={`depth01 ${
                        this.state.isMenuActive ? `active` : ``
                      }`}
                      onClick={this.handleMenuToggle}
                    >
                      {menu.name}
                    </button>
                    <ul
                      className={`sub-menu ${
                        this.state.isMenuActive ? `active` : ``
                      }`}
                    >
                      {menu.subMenu?.map((submenu) => {
                        return (
                          <li key={submenu.id}>
                            <NavLink to={submenu.path} className={`depth02`}>
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
  .depth01 {
    display: block;
    padding: 10px 10px 10px 20px;
    border: 0;
    background: none;
    font-size: 14px;
    &.active {
      color: red;
    }
  }
  .sub-menu {
    display: none;
    &.active {
      display: block;
    }
  }
  .depth02.active {
    color: red;
  }
`;

export default withRouter(SideBar);
