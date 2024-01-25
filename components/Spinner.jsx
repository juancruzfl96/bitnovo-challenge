import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Spinner = ({ show }) => {
  return (
    <>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 bg-black bg-opacity-50">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="text-8xl animate-spin mb-5 text-blue-200"
          />
          <p className="text-lg text-blue-200">Cargando</p>
        </div>
      )}
    </>
  );
};
export default Spinner;
