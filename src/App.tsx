import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technology/Technologies";

function App() {

  return (
    <>
      <div className="bg-[#F1F5F9] overflow-hidden">
        <div className="container mx-auto">
          <Nav></Nav>
          <Banner></Banner>
          <Technologies></Technologies>
        </div>
      </div>
    </>
  )
}

export default App
