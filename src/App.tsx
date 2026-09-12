import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technology/Technologies";

function App() {

  return (
    <>
      <div className="container mx-auto">
        <Nav></Nav>
        <Banner></Banner>
        <Technologies></Technologies>
      </div>
    </>
  )
}

export default App
