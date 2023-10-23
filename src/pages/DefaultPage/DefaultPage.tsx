import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../../UI/GlobalStyles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const DefaultPage = () => {
  return(
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultPage