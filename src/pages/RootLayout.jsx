import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
export default RootLayout;
