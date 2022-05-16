import React from "react";
import "boxicons";
import styled from "@emotion/styled";
function Navbar() {
  return (
    <>
      <NavHeader className="flex justify-center bg-white">
        <nav className="p-3 w-screen">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <box-icon name="library" size="lg" className="mt-2 block" />
              <ul className="flex gap-10 text-lg ml-3 items-center">
                <li>Live</li>
                <li>Push</li>
                <li>Link</li>
                <li>Shop</li>
                <li>Packs</li>
                <li>Help</li>
                <li style={{ color: "#ff764d" }}>More +</li>
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <span style={{ color: "#0000ff", fontSize: "20px" }}>
                Try Live for free
              </span>
              <span style={{ fontSize: "16px" }}>Login or register</span>
            </div>
          </div>
        </nav>
      </NavHeader>
      <Underline className="block h-0 m-0" />
    </>
  );
}

export default Navbar;
const NavHeader = styled.header`
  border-radius: 5px;

  ul {
    li {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
const Underline = styled.div`
  border-top: 2px solid #eee;
  width: 1600px;
`;
