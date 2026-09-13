import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technologies from "./components/Technology/Technologies";

function App() {

  return (
    <>
      <div className="bg-[#F1F5F9]">
        <Nav></Nav>
        <div className="container mx-auto">
          <Banner></Banner>
          <Technologies></Technologies>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
