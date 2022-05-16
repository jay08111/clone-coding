import React from "react";
import "boxicons";
import styled from "@emotion/styled";
function Navbar() {
  return (
    <NavHeader>
      <nav className="p-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <box-icon name="library" size="lg" />
            <ul className="flex gap-10 text-lg ml-3 items-center">
              <li>Live</li>
              <li>Push</li>
              <li>Link</li>
              <li>Shop</li>
              <li>Packs</li>
              <li>Help</li>
              <li>More +</li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <span style={{ color: "#0000ff" }}>Try Live for free</span>
            <span>Login or register</span>
          </div>
        </div>
      </nav>
    </NavHeader>
  );
}

export default Navbar;

const NavHeader = styled.header`
  .logo {
    svg {
    }
  }
  ul {
    li {
      cursor: pointer;
    }
  }
`;
