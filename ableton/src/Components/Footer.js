import styled from "@emotion/styled";
import { FaFacebook, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
function Footer() {
  return (
    <>
      <Underline className="block h-0 m-0" />
      <FooterContainer className="bg-white">
        <div className="mb-20">
          <span className="capitalize text-6xl">ableton</span>
        </div>
        <div className="mt-16 flex">
          <FirstContentWrapper>
            <div>
              <ul>
                <li>
                  Register Live or Push <BsArrowRightShort />
                </li>
                <li>
                  About Ableton
                  <BsArrowRightShort />
                </li>
                <li>
                  Jobs
                  <BsArrowRightShort />
                </li>
              </ul>
              <div className="flex gap-3 text-5xl mt-2">
                <FaFacebook style={{ color: "#0000ff" }} />
                <AiFillTwitterSquare style={{ color: "#00acee" }} />
                <FaYoutubeSquare style={{ color: "#FF0000" }} />
                <FaInstagramSquare style={{ color: "#ff764d" }} />
              </div>
            </div>
          </FirstContentWrapper>
          <SecondContentWrapper>
            <h3>Education</h3>
            <ul>
              <li>
                Offers for students and teachers
                <BsArrowRightShort />
              </li>
              <li>
                Ableton for the Classroom
                <BsArrowRightShort />
              </li>
              <li>
                Ableton for Colleges and Universities
                <BsArrowRightShort />
              </li>
            </ul>
          </SecondContentWrapper>
          <ThirdContentWrapper>
            <h3>Sign up to our newsletter</h3>
            <div className="flex gap-1 flex-col">
              <div className="block leading-normal">
                Enter your email address to stay up to date with the latest
                offers,tutorials, downloads, surveys and more .
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Email Address"
                style={{ flex: 3 }}
              />
              <input type="submit" value="Sign up" style={{ flex: 0 }} />
            </div>
          </ThirdContentWrapper>
        </div>
        <div className="flex justify-between mt-20">
          <FirstContentWrapper>
            <h3>Community</h3>
            <ul>
              <li>
                Find Abletion User Groups
                <BsArrowRightShort />
              </li>
              <li>
                Find Certified Training
                <BsArrowRightShort />
              </li>
              <li>
                Become a Certified Trainer
                <BsArrowRightShort />
              </li>
            </ul>
          </FirstContentWrapper>
          <SecondContentWrapper>
            <h3>Distributors</h3>
            <ul>
              <li>
                Find Distributors
                <BsArrowRightShort />
              </li>
              <li>
                Try Push in-store
                <BsArrowRightShort />
              </li>
            </ul>
          </SecondContentWrapper>
          <ThirdContentWrapper>
            <h3 className="ml-1">Language and Location</h3>
            <div className="flex gap-2 items-center mt-2">
              <select>
                <option value="">English</option>
              </select>
              <select>
                <option value="">Korea , Republic Of</option>
              </select>
            </div>
          </ThirdContentWrapper>
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;
const FooterContainer = styled.footer`
  padding: 9rem;
  font-size: 20px;
  .main-content {
    display: block;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
  }
  h3 {
    font-weight: 700;
  }
`;
const Underline = styled.div`
  border-top: 2px solid #eee;
`;
const FirstContentWrapper = styled.div`
  width: 100%;
`;
const SecondContentWrapper = styled.div`
  width: 100%;
`;
const ThirdContentWrapper = styled.div`
  width: 100%;
  input {
    margin-top: 20px;
    &:nth-of-type(1) {
      background-color: #eee;
      padding: 8px 15px;
    }
    &:nth-of-type(2) {
      background-color: #0000ff;
      color: #fff;
      padding: 0.35rem 1.5rem;
    }
  }
  button {
  }
`;
