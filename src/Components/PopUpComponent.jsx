import React from "react";

function PopUpComponent({ msg }) {
  return (
    <div className="absolute top-[10vh] w-[100vw] flex justify-center z-50">
      <div className="text-black p-2 bg-amber-400 w-fit rounded shadow-lg">
        {msg}
      </div>
    </div>
  );
}

export default PopUpComponent;
