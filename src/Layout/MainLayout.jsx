import React, { useState } from "react";
import HeaderCmp from "../Components/HeaderCmp";
import FooterCmp from "../Components/FooterCmp";
import PopUpComponent from "../Components/PopUpComponent";
import { Outlet } from "react-router-dom";

function MainLayout() {

  const [popupMsg, setPopupMsg] = useState(null);

  function showPopUp(msg) {
    setPopupMsg(msg);
    setTimeout(() => setPopupMsg(null), 2000);
  }

  return (
    <>
      <HeaderCmp />
      {popupMsg && <PopUpComponent msg={popupMsg} />}
      <div className="mt-[10vh]">
        <Outlet/>
      </div>
      <FooterCmp showPopUp={showPopUp} />
    </>
  );
}

export default MainLayout;
