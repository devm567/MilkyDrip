import HeaderCmp from "../Components/HeaderCmp";
import FooterCmp from "../Components/FooterCmp";
import PopUpComponent from "../Components/PopUpComponent";
import { Outlet } from "react-router-dom";

function MainLayout() {

  

  return (
    <>
      <HeaderCmp />
      
      <div className="mt-[10vh]">
        <Outlet/>
      </div>
      <FooterCmp  />
    </>
  );
}

export default MainLayout;
