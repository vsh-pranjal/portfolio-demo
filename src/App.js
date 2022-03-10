import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Divider/>
      <About/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Work/>
      <Divider/>
      <Contact/>
      <Divider/>
      <Footer/>
    </div>
  );
}

export default App;
