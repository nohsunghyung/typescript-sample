import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Routes from "../routes/index";
import { withRouter, RouteComponentProps } from "react-router";

// state 타입 설정
interface Istate {
  activeIndex?: any;
}

// props 타입 설정
interface Iprops {}

// history,location,match 사용을 위해 RouteComponentProps 사용
class SideBar extends Component<Iprops & RouteComponentProps, Istate> {
  state: Istate = {
    activeIndex: null,
  };
  // 메뉴 토글 핸들러
  handleMenuToggle = (index: number) => {
    this.setState({
      activeIndex: index,
    });
  };
  componentDidMount() {
    console.log(2222);
    const pathName = this.props.location.pathname;
    // const route = Routes.filter((menu) => {});
  }
  render() {
    return (
      <SideMenu>
        <ul>
          {Routes.map((menu, index) => {
            return (
              <MenuList
                key={menu.id}
                className={this.state.activeIndex === menu.id ? "active" : ""}
              >
                {/* 1뎁스 메뉴에 path가 있을경우 */}
                {menu.path ? (
                  <NavLink to={menu.path} className="depth depth01">
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
  &.active {
    > .depth {
      color: red;
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
