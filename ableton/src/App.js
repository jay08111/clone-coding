import styled from "@emotion/styled";
import Subcontent from "./Components/Subcontent";
import ThirdContent from "./Components/ThirdContent";

function App() {
  return (
    <div className="App">
      <ul className="flex gap-9 p-8 sticky top-0 z-10">
        <li style={{ color: "#ff764d" }}>About</li>
        <li>Jobs</li>
        <li>Apprenticeships</li>
      </ul>
      <main className="bg-white h-max">
        <section>
          <MainContent className="relative">
            <h1 className="absolute">Ableton</h1>
            <img
              src="https://ableton-production.imgix.net/about/header.jpg?auto=format&fit=crop&fm=jpg&h=1209&ixjsv=1.1.3&w=1333"
              alt="main"
              className="object-cover m-auto"
            />
          </MainContent>
        </section>
        <Subcontent />
        <ThirdContent />
      </main>
    </div>
  );
}

export default App;

const MainContent = styled.div`
  h1 {
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    font-weight: 700;
    font-size: 150px;
    color: #ff764d;
  }
`;
