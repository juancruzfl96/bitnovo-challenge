/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import BlockchainOption from "./BlockchainOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import servicesCripto from "@/services/orders";
import { useRouter } from "next/router";
import Spinner from "./Spinner";

const CreatePayment = () => {
  const router = useRouter();
  const [showCriptoOptions, setShowCriptoOptions] = useState(false);
  const [criptoSelected, setCriptoSelected] = useState({});
  const [description, setDescription] = useState("");
  const [cripto, setCripto] = useState([]);
  const [amount, setAmount] = useState(0);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    servicesCripto
      .getCripto()
      .then(({ data }) => {
        setCripto(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setShowLoading(false));
  }, []);

  const handleInputChange = (e) => {
    //controlo que el valor no sea mayor o menor al que permite la opc de cripto
    let value = parseFloat(e.target.value);
    if (value < criptoSelected.min_amount) {
      value = criptoSelected.min_amount;
    }
    if (value > criptoSelected.max_amount) {
      value = criptoSelected.max_amount;
    }
    setAmount(value);
  };

  const handleSubmitOrder = () => {
    setShowLoading(true);
    const body = {
      expected_output_amount: amount,
      input_currency: criptoSelected.symbol,
      notes: description,
    };
    servicesCripto
      .postOrders(body)
      .then(({ data }) => {
        localStorage.setItem("payData", JSON.stringify(data));
        router.push("/pay");
      })
      .catch((err) => console.log(err))
      .finally(() => setShowLoading(false));
  };

  return (
    <>
      <Spinner show={showLoading} />
      <div
        style={{ width: "650px", height: "530px" }}
        className="rounded-lg mx-auto flex flex-col shadow-2xl justify-between p-8"
      >
        {!showCriptoOptions ? (
          <>
            <p className="text-center font-semibold text-2xl">Crear pago</p>
            <div className="flex flex-col mb-5">
              <label>Importe a pagar</label>
              <input
                className="mt-1 p-4 rounded border border-gray-300"
                type="number"
                placeholder="Añade importe a pagar"
                value={amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label>Seleccionar moneda</label>
              <button
                className="mt-1 p-4 rounded border border-gray-300 flex items-center justify-between"
                onClick={() => setShowCriptoOptions(true)}
              >
                {criptoSelected.image ? (
                  <>
                    <div className="flex items-center">
                      <img
                        src={criptoSelected.image}
                        height={20}
                        width={30}
                        className="mr-3"
                      />

                      <p className="text-sm">{criptoSelected.name}</p>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
                  </>
                ) : (
                  <p className="text-base text-gray-500">
                    Seleccione criptodivisa
                  </p>
                )}
              </button>
            </div>
            <div className="flex flex-col mb-5">
              <label>Concepto</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-4 rounded border border-gray-300"
                type="text"
                placeholder="Añade descripción del pago"
              />
            </div>
            <button
              onClick={handleSubmitOrder}
              disabled={
                description === "" ||
                amount === 0 ||
                Object.keys(criptoSelected).length === 0
              }
              className={`rounded p-4 text-white ${
                description === "" ||
                amount === 0 ||
                Object.keys(criptoSelected).length === 0
                  ? "bg-blue-200"
                  : "bg-blue-500"
              }`}
            >
              Continuar
            </button>
          </>
        ) : (
          <BlockchainOption
            cripto={cripto.filter((elem) => elem.max_amount >= amount)}
            setCripto={setCripto}
            setShowCriptoOptions={setShowCriptoOptions}
            criptoSelected={criptoSelected}
            setCriptoSelected={setCriptoSelected}
          />
        )}
      </div>
    </>
  );
};

export default CreatePayment;
