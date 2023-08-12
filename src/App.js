import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div id="page-container">
      <div id="main">
        <Navbar />
        <Main/>
        <Welcome/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
