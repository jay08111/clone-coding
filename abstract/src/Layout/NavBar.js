import styled from "@emotion/styled";
import { FaShopware } from "react-icons/fa";

function NavBar() {
  return (
    <NavContainer className="flex items-center justify-center">
      <header className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="flex gap-5 items-center home-logo cursor-pointer">
            <span className="shop-icon">
              <FaShopware />
            </span>
            <h1>Abstract</h1>
          </div>
          <div className="vertical-bar"></div>
          <p className="ml-5 cursor-pointer hover:underline">Help Center</p>
        </div>
        <div className="flex gap-5">
          <button className="border btn-submit">Submit a request</button>
          <button className="border btn-sign hover:bg-white">Sign in</button>
        </div>
      </header>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  padding: 0 30px;
  background-color: #000;
  height: 88px;
  header {
    width: 1600px;
    .home-logo {
      .shop-icon {
        font-size: 3rem;
        color: #fff;
      }
      h1 {
        &:hover {
          color: #ddd;
          transition: all 0.3s ease;
        }
      }
    }
    .vertical-bar {
      background-color: #fff;
      height: 30px;
      color: #fff;
      width: 0.1rem;
    }
    h1,
    p {
      color: #fff;
      font-size: 2.5rem;
    }
    button {
      font-size: 2.5rem;
      color: #fff;
      border-radius: 8px;
      padding: 0.6rem 3.2rem;
    }
    .btn-sign {
      background-color: #4c5fd5;
      border-color: #4c5fd5;
      &:hover {
        background-color: #fff;
        color: #000;
        transition: all 0.3s ease;
        border: 1px solid #fff;
      }
    }
  }
`;
