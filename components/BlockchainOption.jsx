/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleCheck,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const BlockchainOption = ({
  setShowCriptoOptions,
  criptoSelected,
  setCriptoSelected,
  cripto,
}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const results = search
    ? cripto.filter((elem) =>
        elem.name.toLowerCase().includes(search.toLowerCase())
      )
    : cripto;

  return (
    <div style={{ minHeight: "530px" }} className=" flex flex-col mb-4">
      <div className="flex justify-between">
        <p className="font-semibold text-xl">Seleccionar criptomoneda</p>
        <button onClick={() => setShowCriptoOptions(false)}>
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </button>
      </div>
      <div className="border border-gray-300 rounded my-5 p-2 flex items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 text-lg" />
        <input
          placeholder="Buscar"
          className="text-lg w-full outline-none"
          style={{ fontSize: "17px" }}
          onChange={handleChange}
        />
      </div>
      <div>
        {cripto.length !== 0 ? (
          results.map((elem, idx) => (
            <div
              key={idx}
              onClick={() => setCriptoSelected(elem)}
              className="flex items-center justify-between mb-4 p-2 rounded cursor-pointer transition duration-300 hover:bg-gray-200"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#EFF2F7")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <div className="flex items-center">
                <img src={elem.image} height={30} width={40} className="mr-3" />
                <div>
                  <p style={{ fontSize: "15px" }}>{elem.name}</p>
                  <p style={{ fontSize: "15px" }} className="text-gray-400">
                    {elem.symbol.split("_")[0]}
                  </p>
                </div>
              </div>
              {criptoSelected.name === elem.name ? (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  color="#71B0FD"
                  className="text-lg mr-3"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-lg mr-3"
                />
              )}
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            El importe a pagar excede el maximo permitido de nuestras
            criptodivisas disponibles
          </p>
        )}
      </div>
    </div>
  );
};

export default BlockchainOption;
