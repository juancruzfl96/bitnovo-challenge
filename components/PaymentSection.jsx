import React, { useState } from "react";
import QRCode from "qrcode.react";
import clipboardCopy from "clipboard-copy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Countdown from "./Countdown";

const PaymentSection = ({ data, criptoSelected }) => {
  const router = useRouter();
  const [smartQr, setSmartQr] = useState(true);

  const fakePay = () => {
    router.push("/succesPay");
    localStorage.clear();
  };

  return (
    <div className="min-w-[500px]">
      <p className="font-semibold mb-5">Realiza el pago</p>
      <div className="shadow-xl rounded-lg flex flex-col items-center p-4">
        <Countdown data={data} className="mb-4" />
        <div className="mb-6 flex space-x-4">
          <button
            onClick={() => setSmartQr(true)}
            className={`${
              smartQr ? "bg-blue-500 text-white" : "bg-[#EDEDED] text-[#B3B3B3]"
            } px-4 py-2 rounded-full`}
          >
            Smart QR
          </button>
          <button
            onClick={() => setSmartQr(false)}
            className={`${
              !smartQr
                ? "bg-blue-500 text-white"
                : "bg-[#EDEDED] text-[#B3B3B3]"
            } px-4 py-2 rounded-full`}
          >
            Web3
          </button>
        </div>
        <div className="shadow-xl rounded-lg  h-32 w-32 flex items-center justify-center mb-9">
          <QRCode value={data} />
        </div>
        <p className="mb-2">
          Enviar {data.crypto_amount} {criptoSelected[0]?.symbol.split("_")[0]}{" "}
          <FontAwesomeIcon
            style={{ color: "#51A8F1", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => clipboardCopy(data.crypto_amount)}
            icon={faCopy}
          />
        </p>
        <p className="mb-4">
          {data.address}
          <FontAwesomeIcon
            style={{ color: "#51A8F1", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => clipboardCopy(data.address)}
            icon={faCopy}
          />
        </p>
        <div>Etiqueta de destino: {data.tag_memo}</div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={fakePay}
          className="flex items-center bg-blue-600 rounded-md text-white p-3 mt-5"
        >
          Simulacro de pago
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
