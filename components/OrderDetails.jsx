/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { format } from "date-fns";

const OrderDetails = ({ data, criptoSelected }) => {
  const dateFormater = data.created_at
    ? format(new Date(data.created_at), "dd/MM/yyyy HH:mm")
    : null;

  return (
    <div className="min-w-[550px] mr-5">
      <p className="font-semibold mb-5">Resumen del pedido</p>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between border-b border-gray-300 pb-4">
          <p className="font-semibold">Importe:</p>
          <p>
            {data.fiat_amount} {data.fiat}
          </p>
        </div>
        <div className="flex justify-between border-b border-gray-300 py-4">
          <p className="font-semibold">Moneda seleccionada:</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="mr-3"
              src={criptoSelected[0]?.image}
              height={30}
              width={40}
            />
            <p style={{ fontSize: "15px" }}>
              {criptoSelected[0]?.symbol.split("_")[0]}
            </p>
          </div>
        </div>
        <div className="border-b border-gray-300 py-4">
          <div className="flex justify-between pb-4">
            <p className="font-semibold">Comercio:</p>
            <p>{data.merchant_device}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Fecha:</p>
            <p>{dateFormater}</p>
          </div>
        </div>
        <div className="flex justify-between py-4">
          <p className="font-semibold">Concepto:</p>
          <p>{data.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
