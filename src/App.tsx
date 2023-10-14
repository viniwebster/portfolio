import { GlobalStyles } from "./UI/GlobalStyles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutMe from "./pages/AboutMe/AboutMe";
import LandingPage from "./pages/LandingPage/LandingPage";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <LandingPage />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
