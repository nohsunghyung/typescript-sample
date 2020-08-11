import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
  return (
    <SideMenu>
      <ul>
        <MenuList>
          <NavLink to="/" className="depth01">
            메인
          </NavLink>
        </MenuList>
        <MenuList>
          <button type="button" className="depth01">
            공지사항
          </button>
          <div className="sub-menu">
            <NavLink to="/notice">일반공지</NavLink>
            <NavLink to="/bannerNotice">배너공지</NavLink>
          </div>
        </MenuList>
      </ul>
    </SideMenu>
  );
}

const SideMenu = styled.aside`
  position: fixed;
  top: 100px;
  left: 0;
`;

const MenuList = styled.li``;

export default SideBar;
