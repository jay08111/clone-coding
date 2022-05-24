import styled from "@emotion/styled";
import { AiOutlineArrowRight } from "react-icons/ai";
function ThirdContent() {
  return (
    <ThirdContentWrapper>
      <article className="m-auto text-center text-base content-article">
        <h1 className="text-left">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </h1>
        <p className="mt-6 text-left">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </article>
      <img
        src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=1333"
        alt="img-radio"
        className="block m-auto"
      />
      <article className="content-article m-auto">
        <h1 className="text-left">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </h1>
        <p className="mt-6 text-left">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p className="mt-12">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </article>
      <div className="img-container flex items-center justify-between">
        <img
          src="https://ableton-production.imgix.net/about/photo-6-a.jpg?fit=crop&h=400&ixjsv=1.1.3&w=533"
          alt="img-left"
        />
        <div className="page-about-collage-background bg-lavender"></div>
        <img
          src="https://ableton-production.imgix.net/about/photo-7.jpg?fit=crop&h=667&ixjsv=1.1.3&w=667"
          alt="img-left"
        />
      </div>
      <article className="content-article m-auto">
        <h1>
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </h1>
        <p className="mt-12">
          If you're joining us in Berlin, we'll help with relocation and
          paperwork. We’ll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it’s not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities.
        </p>
      </article>
      <div className="sec-img-container flex items-center justify-center">
        <img
          src="https://ableton-production.imgix.net/about/photo-8.jpg?crop=right&fit=crop&h=667&ixjsv=1.1.3&w=667"
          alt="sec-left-img"
        />
        <div className="bg-periwinkle flex">
          <div className="flex flex-col justify-center items-center">
            <h1>
              We’re really proud of the work we’ve done so far. But there’s so
              much more to come. If you’d like to be a part of it, please join
              us.
              <div className="flex items-center gap-2 mt-5">
                <p>See latest jobs</p>
                <AiOutlineArrowRight style={{ color: "blue" }} />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </ThirdContentWrapper>
  );
}

export default ThirdContent;
const ThirdContentWrapper = styled.section`
  margin-top: 10rem;
  width: 100%;
  article {
    h1 {
      font-size: 30px;
      width: 95%;
      line-height: 1.2;
    }
    p {
      font-size: 20px;
      width: 95%;
      line-height: 1.6;
    }
    &:nth-of-type(2) {
      margin-top: 10rem;
      h1 {
        line-height: 1.6;
      }
    }
    &:nth-of-type(3) {
      margin-top: 10rem;
      h1 {
        line-height: 1.6;
      }
    }
  }
  img {
    margin-top: 9rem;
  }
  .img-container {
    position: relative;
    margin-top: 10rem;
    img {
      z-index: 2;
      &:nth-of-type(1) {
        margin-left: 5rem;
      }
      &:nth-of-type(2) {
      }
    }
    .bg-lavender {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: #d5b3ff;
      width: 1066px;
      height: 933px;
      z-index: 1;
    }
  }
  .sec-img-container {
    margin-top: 7rem;
    padding-bottom: 8rem;
    img {
      margin: 0;
    }
    .bg-periwinkle {
      background-color: #b1c5ff;
      width: 666px;
      height: 666px;
      h1 {
        width: 62%;
        font-size: 30px;
      }
      p {
        font-size: 25px;
        color: blue;
      }
    }
  }
`;
