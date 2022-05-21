import styled from "@emotion/styled";
import Subcontent from "./Components/Subcontent";

function App() {
  return (
    <div className="App">
      <main className="bg-white h-screen">
        <section>
          <ul className="flex gap-9 p-8">
            <li style={{ color: "#ff764d" }}>About</li>
            <li>Jobs</li>
            <li>Apprenticeships</li>
          </ul>
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
      </main>
      <Underline className="block h-0 m-0 w-full" />
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
const Underline = styled.div`
  border-top: 2px solid #eee;
  z-index: 2;
`;
