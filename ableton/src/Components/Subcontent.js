import styled from "@emotion/styled";

function Subcontent() {
  return (
    <Wrapper className="p-20 relative">
      <article className="text-left m-auto">
        <h1>
          We make <span>Live</span>, <span>Push</span> and <span>Link</span> —
          unique software and hardware for music creation and performance. With
          these products, our community of users creates amazing things.
        </h1>
        <p className="mt-6">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </article>
      <div className="img-container flex items-center justify-between">
        <img
          src="https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop"
          alt="subcontent-img"
        />
        <img
          src="https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop"
          alt="subcontent-img"
        />
        <div className="page-about-collage-background bg-lemonade"></div>
      </div>
      <article className="text-left m-auto">
        <div className="">
          <h1>
            Making music isn’t easy. It takes time, effort, and learning. But
            when you’re in the flow, it’s incredibly rewarding.
          </h1>
          <p className="mt-6">
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.
          </p>
        </div>
        <div className="video w-full relative">
          <img
            src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=793"
            alt="youtube-video"
          />
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxjaXJjbGUgZmlsbD0iIzAwMzNGRiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIzNSwyNSAyNywyOS41IDE5LDM0IDE5LDI1IDE5LDE2IDI3LDIwLjUgIi8+PC9nPjwvc3ZnPg=="
            alt="play-button"
            className="play-button absolute"
          />
        </div>
        <small>Why Ableton - Juanpe Bolivar</small>
      </article>
      <article className="text-left m-auto">
        <h1>
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </h1>
        <p className="mt-6 w-full">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </article>
      <div className="flex justify-between sec-img-container items-center relative">
        <div className="flex flex-col gap-20 img-right">
          <img
            src="https://ableton-production.imgix.net/about/photo-3.jpg?fit=crop&h=400&ixjsv=1.1.3&w=533"
            alt="img-right"
            className="mb-20"
          />
          <img
            src="https://ableton-production.imgix.net/about/photo-4.jpg?fit=crop&h=400&ixjsv=1.1.3&w=533"
            alt="img-right"
          />
        </div>
        <div className="page-about-collage-background bg-spearmint"></div>
        <div className="img-left">
          <img
            src="https://ableton-production.imgix.net/about/photo-5.jpg?fit=crop&h=667&ixjsv=1.1.3&w=667"
            alt="img-left"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Subcontent;

const Wrapper = styled.section`
  article {
    width: 60%;
    margin-top: 6rem;
    &:nth-of-type(2) {
      margin-top: 20rem;
      h1 {
        width: 100%;
      }
      img {
        margin-top: 10rem;
      }
      .video {
        .play-button {
          margin: 0;
          width: 100px;
          height: 100px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    &:nth-of-type(3) {
      margin-top: 10rem;
      h1 {
        width: 100%;
      }
      p {
        width: 100%;
        line-height: 1.6;
      }
    }
    h1 {
      width: 110%;
      font-size: 2rem;
      span {
        color: #0000ff;
      }
    }
  }
  .img-container {
    margin-top: 15rem;
    .bg-lemonade {
      background-color: #fbffa7;
      width: 933px;
      height: 933px;
      left: 50%;
      transform: translateX(-14.2%);
    }
    img {
      object-fit: cover;
      &:nth-of-type(1) {
        max-width: 667px;
        height: 667px;
        z-index: 2;
      }
      &:nth-of-type(2) {
        width: 533px;
        height: 400px;
        z-index: 2;
      }
    }
  }
  .sec-img-container {
    width: 100%;
    margin-top: 18rem;
    img {
      z-index: 2;
    }
    .img-left {
      z-index: 2;
    }
  }
  .bg-spearmint {
    left: -40%;
    transform: translateX(43.9%);
    background-color: #b6ffc0;
    height: 1200px;
    width: 933px;
    z-index: 1;
  }
`;
