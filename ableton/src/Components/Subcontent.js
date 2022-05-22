import styled from "@emotion/styled";

function Subcontent() {
  return (
    <Wrapper className="p-20">
      <article className="text-left m-auto mt-12">
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
      <div className="img-container flex items-center">
        <img
          src="https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop"
          alt="subcontent-img"
        />
        <div className="bg-lemonade"></div>
        <img
          src="https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop"
          alt="subcontent-img"
        />
      </div>
    </Wrapper>
  );
}

export default Subcontent;

const Wrapper = styled.section`
  article {
    width: 60%;
    h1 {
      font-size: 2rem;
      span {
        color: #0000ff;
      }
    }
  }
  .img-container {
    margin-top: 200px;
    .bg-lemonade {
      background-color: #fbffa7;
    }
    img {
      object-fit: cover;
      &:nth-of-type(1) {
        width: 667px;
        height: 667px;
      }
      &:nth-of-type(2) {
        width: 533px;
        height: 400px;
      }
    }
  }
`;
